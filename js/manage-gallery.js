document.addEventListener('DOMContentLoaded', () => {
  const galleryCards = document.querySelector('.gallery-cards');
  const addBtn = document.getElementById('addDesignBtn');
  const modal = document.getElementById('designModal');
  const modalTitle = document.getElementById('modalTitle');
  const nameInput = document.getElementById('designName');
  const priceInput = document.getElementById('designPrice');
  const imageInput = document.getElementById('designImage');
  const fileInput = document.getElementById('designFile');
  const saveBtn = document.getElementById('saveDesignBtn');
  const searchInput = document.getElementById('gallerySearch');
  const undoContainer = document.getElementById('undoContainer');

  const STATE_KEY = 'adminGalleryItems_v4';
  const LEGACY_KEY = 'adminGallery';

  // load/migrate persisted state
  let galleryState = [];
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) { galleryState = JSON.parse(raw); }
  } catch (e) { galleryState = []; }

  if (galleryState.length === 0) {
    galleryState = [
      { id: 'design-1', name: 'Floral Aesthetic Case', price: 2000, image: '../../images/floral%20asthetic.jpg' },
      { id: 'design-2', name: 'Minimalist Line Art', price: 1500, image: '../../images/minimilist line art.jpg' },
      { id: 'design-3', name: 'Retro Neon Case', price: 2500, image: '../../images/retro neon.jpg' },
      { id: 'design-4', name: 'Marble Luxe', price: 1800, image: '../../images/Marble Luxe.webp' },
      { id: 'design-5', name: 'Abstract Geometric', price: 2200, image: '../../images/Abstract Geometric.jpg' },
      { id: 'design-6', name: 'Ocean Blue', price: 1750, image: '../../images/Ocean Blue.jpg' },
      { id: 'design-7', name: 'Golden Sands', price: 2100, image: '../../images/Golden Sands.jpg' },
      { id: 'design-8', name: 'Cyberpunk City', price: 2600, image: '../../images/Cyberpunk City.jpg' }
    ];
    localStorage.setItem(STATE_KEY, JSON.stringify(galleryState));
  }

  let currentEditId = null;

  // render gallery with selectable cards
  let lastDeleted = null; // store {items:[], timestamp}
  function renderGallery(filterText) {
    const list = filterText ? galleryState.filter(d => (d.name || '').toLowerCase().includes(filterText.toLowerCase())) : galleryState;
    galleryCards.innerHTML = '';
    list.forEach((design) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.dataset.id = design.id;
      card.innerHTML = `
        <div style="position:relative;">
          <img src="${design.image}" alt="${design.name}">
        </div>
        <div class="gallery-info">
          <h3>${design.name}</h3>
          <p>Price: Rs ${Number(design.price).toFixed(2)}</p>
          <p style="font-size:12px; color:#aaa; margin-top:4px;">ID: ${design.id}</p>
        </div>
        <div class="gallery-actions">
          <button class="approve-btn edit-btn" style="padding:6px 14px; font-size:12px;">Edit</button>
          <button class="delete-single-btn delete-btn" title="Delete">🗑</button>
        </div>
      `;
      galleryCards.appendChild(card);



      card.querySelector('.edit-btn').addEventListener('click', () => {
        currentEditId = design.id;
        modalTitle.textContent = 'Edit Design';
        nameInput.value = design.name;
        priceInput.value = design.price;
        imageInput.value = design.image;
        fileInput.value = '';
        openModal(modal);
      });

      card.querySelector('.delete-btn').addEventListener('click', () => {
        if (!confirm('Delete this design?')) return;
        // remove and set undo buffer
        const removed = galleryState.filter(d => d.id === design.id);
        galleryState = galleryState.filter(d => d.id !== design.id);
        persistState();
        lastDeleted = { items: removed, ts: Date.now() };
        renderGallery(searchInput.value.trim());
        showUndo();
      });
    });
  }

  function persistState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(galleryState));
  }

  function openModal(modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); }
  function closeModal(modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }

  document.querySelectorAll('.modal [data-close]').forEach(el => el.addEventListener('click', e => closeModal(modal)));

  addBtn.addEventListener('click', () => {
    currentEditId = null;
    modalTitle.textContent = 'Add New Design';
    nameInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
    fileInput.value = '';
    openModal(modal);
  });

  // helper to read file as dataURL
  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });
  }

  saveBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const imageUrl = imageInput.value.trim();
    const file = fileInput.files && fileInput.files[0];

    if (!name || isNaN(price) || price <= 0) { alert('Please provide a valid name and price.'); return; }

    // if a file is selected, validate and read it
    let finalImage = imageUrl || '';
    if (file) {
      if (!file.type.startsWith('image/')) { alert('Please upload an image file'); return; }
      if (file.size > 2 * 1024 * 1024) { alert('Image too large (max 2MB)'); return; }
      try { finalImage = await readFileAsDataURL(file); } catch (e) { alert('Failed to read file'); return; }
    }

    if (!finalImage) { alert('Please provide an image file or image URL'); return; }

    if (currentEditId) {
      const design = galleryState.find(d => d.id === currentEditId);
      if (design) { design.name = name; design.price = price; design.image = finalImage; design.updatedAt = new Date().toISOString(); }
    } else {
      const newItem = { id: 'design-' + Date.now(), name, price, image: finalImage, createdAt: new Date().toISOString() };
      galleryState.unshift(newItem);
    }
    persistState();
    renderGallery(searchInput.value.trim());
    closeModal(modal);
  });

  // bulk delete


  function showUndo() {
    if (!lastDeleted || !lastDeleted.items || lastDeleted.items.length === 0) { undoContainer.innerHTML = ''; return; }
    undoContainer.innerHTML = `<span>Deleted ${lastDeleted.items.length} item(s).</span> <button id="undoBtn" class="approve-btn" style="padding:6px 8px; font-size:12px;">Undo</button>`;
    const undoBtn = document.getElementById('undoBtn');
    undoBtn.addEventListener('click', () => {
      galleryState = lastDeleted.items.concat(galleryState);
      persistState();
      lastDeleted = null;
      undoContainer.innerHTML = '';
      renderGallery(searchInput.value.trim());
    });
    // auto-clear after 10s
    setTimeout(() => { if (lastDeleted) { lastDeleted = null; undoContainer.innerHTML = ''; } }, 10000);
  }

  // search
  searchInput.addEventListener('input', (e) => { renderGallery(e.target.value.trim()); });

  renderGallery();
});
