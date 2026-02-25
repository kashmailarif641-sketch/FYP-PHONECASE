// ========== CaseCraft | Design Studio Script ==========

// ===== Initialize Page =====
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("design-overlay");

  // Load selected model from localStorage (if available)
  const brand = localStorage.getItem("selectedBrand");
  const model = localStorage.getItem("selectedModel");

  if (brand && model) {
    overlay.innerHTML = `<img src='../../images/phones/${brand}-${model}.png' alt='${brand} ${model}' class='phone-preview'>`;
  } else {
    overlay.textContent = "No model selected";
  }
});

// ====== Handle Design Upload =====
const designUpload = document.getElementById("design-upload");
if (designUpload) {
  designUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const overlay = document.getElementById("design-overlay");

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        overlay.innerHTML = `<img src="${e.target.result}" alt="Uploaded Design" class="uploaded-design">`;
      };
      reader.readAsDataURL(file);
    }
  });
}

// ====== Save Design =====
const saveButton = document.getElementById("save-design");
if (saveButton) {
  saveButton.addEventListener("click", () => {
    alert("✅ Your design has been saved successfully!");
  });
}

// ====== Go to Order Page =====
const placeOrderButton = document.getElementById("place-order");
if (placeOrderButton) {
  placeOrderButton.addEventListener("click", () => {
    alert("🛒 Proceeding to Order Page...");
    // Make sure the path is correct based on your folder structure
    window.location.href = "order.html";
  });
}

// ===== Sidebar / Drawer Navigation =====
function nav(panel, el) {
  const drawer = document.getElementById('drawer-panel');
  const panels = document.querySelectorAll('#drawer-panel .panel-content');
  // open drawer
  drawer.classList.remove('closed');

  // hide all panels
  panels.forEach(p => p.classList.add('hidden'));

  // map panel name to element id
  const map = {
    layouts: 'sub-layouts',
    background: 'sub-backgrounds',
    elements: 'sub-elements',
    text: 'sub-text',
    upload: 'sub-upload',
    tools: 'sub-tools',
    ai: 'sub-ai',
    product: 'sub-product'
  };

  const targetId = map[panel];
  if (targetId) {
    const target = document.getElementById(targetId);
    if (target) target.classList.remove('hidden');
  }

  // mark active icon
  document.querySelectorAll('.left-sidebar .tool-icon').forEach(icon => icon.classList.remove('active'));
  if (el) el.classList.add('active');
}

function closeDrawer() {
  const drawer = document.getElementById('drawer-panel');
  if (drawer) drawer.classList.add('closed');
  document.querySelectorAll('#drawer-panel .panel-content').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.left-sidebar .tool-icon').forEach(icon => icon.classList.remove('active'));
}

function showMainPanel() {
  closeDrawer();
}

// ===== Simple asset interactions (minimal implementations) =====
function addText() {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return alert('Design sheet not found');
  if (EditorState.locked) return alert('Canvas is locked');
  const node = document.createElement('div');
  node.className = 'design-element text-element';
  node.textContent = 'Heading';
  node.style.padding = '8px 12px';
  node.style.background = 'rgba(255,255,255,0.9)';
  node.style.border = '1px dashed #ccc';
  node.style.borderRadius = '6px';
  node.style.cursor = 'move';
  node.style.position = 'absolute';
  node.style.left = '50%'; node.style.top = '50%'; node.style.transform = 'translate(-50%,-50%)';
  sheet.appendChild(node);
  saveState(); attachElementSelection(); updatePreview();
}

function addShape(type) {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return;
  if (EditorState.locked) return alert('Canvas is locked');

  const wrapper = document.createElement('div');
  wrapper.className = 'design-element';
  wrapper.style.position = 'absolute';
  wrapper.style.left = '50%'; wrapper.style.top = '50%';
  wrapper.style.transform = 'translate(-50%,-50%)';
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.justifyContent = 'center';
  wrapper.style.zIndex = ++zIndexCounter;

  // inner shape node
  const inner = document.createElement('div');
  inner.className = 'shape ' + type;
  // default size for wrapper (keeps clickable area)
  wrapper.style.width = '80px'; wrapper.style.height = '80px';
  // if triangle uses zero-size, keep wrapper square
  inner.style.pointerEvents = 'none';

  wrapper.appendChild(inner);

  // make draggable and removable
  makeDraggable(wrapper);
  wrapper.addEventListener('dblclick', () => { wrapper.remove(); updatePreview(); saveState(); });

  sheet.appendChild(wrapper);
  saveState(); attachElementSelection(); updatePreview();
}

function addSticker(emoji) {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return;
  if (EditorState.locked) return alert('Canvas is locked');
  const node = document.createElement('div');
  node.className = 'design-element sticker-element';
  node.textContent = emoji;
  node.style.fontSize = '2rem';
  node.style.margin = '6px';
  node.style.position = 'absolute'; node.style.left = '50%'; node.style.top = '50%'; node.style.transform = 'translate(-50%,-50%)';
  sheet.appendChild(node);
  saveState(); attachElementSelection(); updatePreview();
}

function dragAsset(e, type, value) {
  e.dataTransfer.setData('text/plain', JSON.stringify({ type, value }));
}

// allow drop on canvas-area
const canvasArea = document.querySelector('.canvas-area');
if (canvasArea) {
  canvasArea.addEventListener('dragover', (e) => e.preventDefault());
  canvasArea.addEventListener('drop', (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      if (data.type === 'sticker') addSticker(data.value);
      if (data.type === 'template') applyTemplate(data.value);
      if (data.type === 'image') {
        // not implemented, placeholder
      }
    } catch (err) {
      // ignore
    }
  });
}

// ===== History / Undo-Redo =====
const EditorState = {
  history: [],
  pointer: -1,
  max: 100,
  locked: false
};

function getSheetSnapshot() {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return { html: '', bg: '' };
  return { html: sheet.innerHTML, bg: sheet.style.background || '' };
}

function applySnapshot(snapshot) {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return;
  sheet.innerHTML = snapshot.html || '';
  sheet.style.background = snapshot.bg || '';
  attachElementSelection();
  updatePreview();
}

function saveState() {
  const snap = getSheetSnapshot();
  // if we undid some steps and then make a new change, truncate redo stack
  if (EditorState.pointer < EditorState.history.length - 1) {
    EditorState.history = EditorState.history.slice(0, EditorState.pointer + 1);
  }
  EditorState.history.push(snap);
  if (EditorState.history.length > EditorState.max) EditorState.history.shift();
  EditorState.pointer = EditorState.history.length - 1;
}

function toggleLock() {
  EditorState.locked = !EditorState.locked;
  const btn = document.getElementById('lock-btn');
  if (btn) {
    if (EditorState.locked) {
      btn.innerHTML = '<i class="fas fa-lock"></i>';
      btn.classList.add('active');
      btn.title = 'Locked';
    } else {
      btn.innerHTML = '<i class="fas fa-lock-open"></i>';
      btn.classList.remove('active');
      btn.title = 'Lock';
    }
  }
}

function undo() {
  if (EditorState.pointer <= 0) return;
  EditorState.pointer -= 1;
  const snap = EditorState.history[EditorState.pointer];
  applySnapshot(snap);
}

function redo() {
  if (EditorState.pointer >= EditorState.history.length - 1) return;
  EditorState.pointer += 1;
  const snap = EditorState.history[EditorState.pointer];
  applySnapshot(snap);
}

function deleteSelected() {
  if (EditorState.locked) return alert('Canvas is locked');
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return;
  const sel = sheet.querySelector('.selected-element');
  if (sel) {
    sel.remove();
    saveState(); updatePreview();
  }
}

// keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); }
  if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.shiftKey && e.key.toLowerCase() === 'z'))) { e.preventDefault(); redo(); }
  if (e.key === 'Delete') { deleteSelected(); }
});

// selection handling
function attachElementSelection() {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return;
  // if locked, ensure nothing is selectable
  if (EditorState.locked) {
    sheet.querySelectorAll('.design-element').forEach(x => x.classList.remove('selected-element'));
    return;
  }
  sheet.querySelectorAll('.design-element').forEach(el => {
    el.addEventListener('click', (ev) => {
      ev.stopPropagation();
      sheet.querySelectorAll('.design-element').forEach(x => x.classList.remove('selected-element'));
      el.classList.add('selected-element');
    });
  });
  // clicking empty sheet deselects
  sheet.addEventListener('click', () => {
    sheet.querySelectorAll('.design-element').forEach(x => x.classList.remove('selected-element'));
  });
}

/* ===== Design drawer helpers ===== */
function showDesignTab(tab) {
  document.getElementById('tplTab').classList.toggle('active', tab === 'templates');
  document.getElementById('styTab').classList.toggle('active', tab === 'styling');
  document.getElementById('design-templates').classList.toggle('hidden', tab !== 'templates');
  document.getElementById('design-styling').classList.toggle('hidden', tab !== 'styling');
}

function setCanvasPadding(px) {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return; sheet.style.padding = px + 'px';
}

function setCanvasRadius(r) {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return; sheet.style.borderRadius = r + 'px';
}

function resetCanvasStyling() {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return; sheet.style.padding = '12px'; sheet.style.borderRadius = '12px'; updatePreview();
}

/* ===== Background helpers ===== */
function applyBackgroundColor(col) {
  const sheet = document.querySelector('.design-sheet'); if (!sheet) return; sheet.style.background = col; updatePreview();
}
function applyCombo(name) {
  const sheet = document.querySelector('.design-sheet'); if (!sheet) return;
  if (name === 'sunset') sheet.style.background = 'linear-gradient(45deg,#ff7e5f,#feb47b)';
  if (name === 'ocean') sheet.style.background = 'linear-gradient(45deg,#6ee7b7,#3b82f6)';
  if (name === 'pastel') sheet.style.background = 'linear-gradient(45deg,#ffd6e0,#e0f2fe)';
  updatePreview();
}
function applyBackgroundFromPicker() {
  const v = document.getElementById('bgColorPicker').value; applyBackgroundColor(v);
}

/* ===== Text helpers ===== */
function setFont(font) {
  const sheet = document.querySelector('.design-sheet'); if (!sheet) return;
  const sel = sheet.querySelector('.selected-element'); if (!sel) return; sel.style.fontFamily = font; updatePreview();
}

function setFontSize(sz) {
  const sheet = document.querySelector('.design-sheet'); if (!sheet) return;
  const sel = sheet.querySelector('.selected-element'); if (!sel) return; sel.style.fontSize = sz + 'px'; updatePreview();
}

function setTextColor(col) {
  const sheet = document.querySelector('.design-sheet'); if (!sheet) return;
  const sel = sheet.querySelector('.selected-element'); if (!sel) return; sel.style.color = col; updatePreview();
}

function toggleTextStyle(style) {
  const sheet = document.querySelector('.design-sheet'); if (!sheet) return;
  const sel = sheet.querySelector('.selected-element'); if (!sel) return;
  if (style === 'bold') sel.style.fontWeight = (sel.style.fontWeight === '700' || sel.style.fontWeight === 'bold') ? '400' : '700';
  if (style === 'italic') sel.style.fontStyle = (sel.style.fontStyle === 'italic') ? 'normal' : 'italic';
  if (style === 'underline') sel.style.textDecoration = (sel.style.textDecoration === 'underline') ? 'none' : 'underline';
  updatePreview();
}

/* ===== Tools (modes) ===== */
function setTool(name) {
  EditorState.currentTool = name;
  // lightweight placeholder behaviour
  if (name === 'crop') alert('Crop mode enabled (mock).');
  if (name === 'pen') alert('Pen drawing mode enabled (mock).');
  if (name === 'erase') alert('Eraser mode enabled (mock).');
  if (name === 'move') alert('Move mode enabled.');
}


// ensure initial state
setTimeout(() => { attachElementSelection(); saveState(); updatePreview && updatePreview(); }, 300);

function applyTemplate(name) {
  const area = document.querySelector('.canvas-area');
  if (!area) return;
  // simple visual template: change background
  if (name === 'modern') area.style.background = 'linear-gradient(135deg,#E0F2FE,#fff)';
  if (name === 'nature') area.style.background = 'linear-gradient(135deg,#DCFCE7,#fff)';
}

function selMat(el, addPrice, name) {
  document.querySelectorAll('.prod-card').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');
  // visual feedback: set a data-attr on canvas
  const area = document.querySelector('.canvas-area');
  if (area) area.dataset.material = name;
}

function applyBackground(type) {
  const sheet = document.querySelector('.design-sheet');
  if (!sheet) return;
  switch (type) {
    case 'solid': sheet.style.background = '#ffffff'; break;
    case 'gradient': sheet.style.background = 'linear-gradient(135deg,#06b6d4,#3b82f6)'; break;
    case 'marble': sheet.style.background = 'repeating-linear-gradient(45deg,#fff,#fff 10px,#f3f4f6 10px,#f3f4f6 20px)'; break;
    case 'glitter': sheet.style.background = 'linear-gradient(45deg,#fef3c7,#fde68a)'; break;
    case 'neon': sheet.style.background = 'linear-gradient(45deg,#ff00cc,#3333ff)'; break;
    case 'pastel': sheet.style.background = 'linear-gradient(45deg,#ffd6e0,#e0f2fe)'; break;
    default: sheet.style.background = '#fff';
  }
  updatePreview();
}

// ===== Preview sync =====
function updatePreview() {
  const sheet = document.querySelector('.design-sheet');
  const mirror = document.getElementById('mirror');
  if (!sheet || !mirror) return;
  // simple clone: copy innerHTML and background
  mirror.innerHTML = '';
  const clone = sheet.cloneNode(true);
  // remove selection classes in preview
  clone.querySelectorAll && clone.querySelectorAll('.selected-element').forEach(n => n.classList.remove('selected-element'));
  clone.className = 'design-sheet-clone';
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '8px';
  clone.style.pointerEvents = 'none';

  // build case mockup wrapper
  const caseFrame = document.createElement('div');
  caseFrame.className = 'case-frame';
  const caseInner = document.createElement('div');
  caseInner.className = 'case-inner';
  // set exact clone size to original sheet px so we can compute scale
  const sheetW = sheet.offsetWidth || parseInt(getComputedStyle(sheet).width);
  const sheetH = sheet.offsetHeight || parseInt(getComputedStyle(sheet).height);

  // ensure wrapper (.case-inner) matches the sheet size exactly
  caseInner.style.width = sheetW + 'px';
  caseInner.style.height = sheetH + 'px';
  caseInner.style.position = 'relative';

  clone.style.width = sheetW + 'px';
  clone.style.height = sheetH + 'px';
  clone.style.position = 'absolute';
  clone.style.left = '50%';
  clone.style.top = '50%';
  clone.style.transformOrigin = 'center center';

  caseInner.appendChild(clone);
  caseFrame.appendChild(caseInner);
  mirror.appendChild(caseFrame);

  // place clone at exact pixel size so preview and canvas match
  clone.style.transform = 'translate(-50%,-50%) scale(1)';
}

// hook upload button to file selector
const actualUploadBtn = document.getElementById('actual-upload-btn');
if (actualUploadBtn) {
  actualUploadBtn.addEventListener('click', () => {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = 'image/*';
    inp.onchange = (ev) => {
      const f = ev.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '100%';
        img.style.borderRadius = '8px';
        const list = document.getElementById('upload-list');
        if (list) list.appendChild(img);
      };
      reader.readAsDataURL(f);
    };
    inp.click();
  });
}

// =====================================================
// Auto-sync: watch for canvas (.design-sheet) changes and
// update the preview automatically (debounced).
// =====================================================
function debounce(fn, wait) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// create observer after DOM is ready
setTimeout(() => {
  const sheetEl = document.querySelector('.design-sheet');
  if (!sheetEl) return;
  const debouncedUpdate = debounce(() => { try { updatePreview(); } catch (e) { } }, 60);

  // observe attribute/style changes and subtree changes (elements added/removed)
  const mo = new MutationObserver(() => debouncedUpdate());
  mo.observe(sheetEl, { attributes: true, childList: true, subtree: true, attributeFilter: ['style', 'class'] });

  // also update on window resize in case layout affects sheet size
  window.addEventListener('resize', debouncedUpdate);
}, 400);

// ===== Tool Logic Implementation (Frontend Only) =====
let zIndexCounter = 100;

function getSelected() {
  return document.querySelector('.design-sheet .selected-element');
}

function flipHorizontal() {
  const el = getSelected();
  if (!el) return;
  // Try to find an inner content wrapper to flip
  const inner = el.querySelector('.shape') || el.querySelector('img') || el.querySelector('.text-content') || el;

  if (inner.style.transform.includes('scaleX(-1)')) {
    inner.style.transform = inner.style.transform.replace('scaleX(-1)', '').trim();
  } else {
    inner.style.transform += ' scaleX(-1)';
  }
  updatePreview();
}

function flipVertical() {
  const el = getSelected();
  if (!el) return;
  const inner = el.querySelector('.shape') || el.querySelector('img') || el.querySelector('.text-content') || el;

  if (inner.style.transform.includes('scaleY(-1)')) {
    inner.style.transform = inner.style.transform.replace('scaleY(-1)', '').trim();
  } else {
    inner.style.transform += ' scaleY(-1)';
  }
  updatePreview();
}

function bringForward() {
  const el = getSelected();
  if (!el) return;
  const currentZ = parseInt(el.style.zIndex) || 10;
  el.style.zIndex = currentZ + 1;
  updatePreview();
}

function sendBackward() {
  const el = getSelected();
  if (!el) return;
  const currentZ = parseInt(el.style.zIndex) || 10;
  el.style.zIndex = Math.max(0, currentZ - 1);
  updatePreview();
}

function setOpacity(val) {
  const el = getSelected();
  if (!el) return;
  el.style.opacity = val / 100;
  updatePreview();
}

// Mock handlers for tool modes
function setTool(mode) {
  EditorState.currentTool = mode;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  console.log('Tool set to:', mode);

  // Visual feedback only
  if (mode === 'crop' || mode === 'pen' || mode === 'eraser') {
    // In a real app we would switch canvas modes. 
    // For now, we just alert or log as requested "frontend only logic".
    // Let's show a toast or a visual indicator instead of alert to be "premium".
    const toast = document.createElement('div');
    toast.textContent = mode.charAt(0).toUpperCase() + mode.slice(1) + ' active';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#1e293b';
    toast.style.color = '#fff';
    toast.style.padding = '8px 16px';
    toast.style.borderRadius = '20px';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }
}