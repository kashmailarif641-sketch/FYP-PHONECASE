// Front-end only review + purchase flow
document.addEventListener('DOMContentLoaded', () => {
  function getCards(){ return Array.from(document.querySelectorAll('.design-card')); }
  const setPriceModal = document.getElementById('setPriceModal');
  const paymentModal = document.getElementById('paymentModal');
  const inputPrice = document.getElementById('inputPrice');
  const modalDesignTitle = document.getElementById('modalDesignTitle');
  const confirmSetPrice = document.getElementById('confirmSetPrice');
  const payNowBtn = document.getElementById('payNowBtn');
  const paymentSummary = document.getElementById('paymentSummary');

  // Storage keys
  const STATE_KEY = 'premiumDesignsState';
  const TX_KEY = 'premiumTransactions';

  // load persisted state
  let state = {};
  try { state = JSON.parse(localStorage.getItem(STATE_KEY) || '{}'); } catch(e){ state = {}; }

  function reloadState() {
    try { state = JSON.parse(localStorage.getItem(STATE_KEY) || '{}'); console.info('premiumDesignsState reloaded', state); } catch(e){ state = {}; }
  }

  function persist() { localStorage.setItem(STATE_KEY, JSON.stringify(state)); }

  // helper to open/close modals
  function openModal(modal){ if(!modal) return; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
  function closeModal(modal){ if(!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }

  // attach close behavior for any [data-close] inside modals
  document.querySelectorAll('.modal [data-close]').forEach(el => el.addEventListener('click', (e)=>{ const modal = e.target.closest('.modal'); closeModal(modal); }));
  document.querySelectorAll('.modal .modal-close').forEach(el => el.addEventListener('click', (e)=>{ const modal = e.target.closest('.modal'); closeModal(modal); }));

  // initialize UI for existing cards
  function initCards() {
    const cards = getCards();
    cards.forEach((card, idx) => {
    // ensure each card has an id
      if(!card.dataset.id) card.dataset.id = 'design-' + (idx + 1);
      const id = card.dataset.id;

      // add status badge area
      const info = card.querySelector('.design-info');
      if(info && !info.querySelector('.meta')){
        const meta = document.createElement('div'); meta.className = 'meta';
        meta.innerHTML = `<span class="status-badge pending">Pending</span>`;
        info.appendChild(meta);
      }

      // render saved state (try both dataset id and legacy id)
      const legacyId = 'design-' + (idx + 1);
      const s = state[id] || state[legacyId];
      if(s){ applyStateToCard(card, s); }

      // wire approve/reject
      const approveBtn = card.querySelector('.approve-btn');
      const rejectBtn = card.querySelector('.reject-btn');

      if(approveBtn){
        approveBtn.addEventListener('click', ()=>{
          // open set-price modal
          const title = card.querySelector('.design-info h3')?.textContent || 'Premium Design';
          modalDesignTitle.textContent = title;
          inputPrice.value = (state[id] && state[id].price) ? state[id].price : '';
          // store current card id on modal
          setPriceModal.dataset.currentId = id;
          openModal(setPriceModal);
        });
      }

      if(rejectBtn){
        rejectBtn.addEventListener('click', ()=>{
          // mark rejected
          const s = { status: 'rejected', price: null, updatedAt: new Date().toISOString() };
          state[id] = s; persist(); applyStateToCard(card, s);
        });
      }
    });
  }

  // initial run
  initCards();

  // confirm set price -> mark approved and open payment modal
  confirmSetPrice.addEventListener('click', ()=>{
    const id = setPriceModal.dataset.currentId; if(!id) return;
    const price = parseFloat(inputPrice.value);
    if(isNaN(price) || price <= 0){ alert('Please enter a valid positive price'); return; }
    // update state
    state[id] = { status: 'approved', price: price, updatedAt: new Date().toISOString() };
    persist();
    // update UI card
    const card = document.querySelector(`.design-card[data-id="${id}"]`);
    if(card) applyStateToCard(card, state[id]);
    closeModal(setPriceModal);

    // open mock payment
    paymentSummary.textContent = `${card.querySelector('.design-info h3').textContent} — $${price.toFixed(2)}`;
    paymentModal.dataset.currentId = id;
    openModal(paymentModal);
  });

  // pay now -> simulate success
  payNowBtn.addEventListener('click', ()=>{
    const id = paymentModal.dataset.currentId; if(!id) return;
    const s = state[id]; if(!s || !s.price){ alert('Missing price'); return; }
    payNowBtn.disabled = true; payNowBtn.textContent = 'Processing...';
    setTimeout(()=>{
      // create mock transaction
      const tx = { id: 'tx-'+Date.now(), designId: id, amount: s.price, createdAt: new Date().toISOString(), method: 'mock' };
      const txs = JSON.parse(localStorage.getItem(TX_KEY) || '[]'); txs.push(tx); localStorage.setItem(TX_KEY, JSON.stringify(txs));
      // update state
      state[id].status = 'purchased'; state[id].purchasedAt = new Date().toISOString(); persist();
      // update UI
      const card = document.querySelector(`.design-card[data-id="${id}"]`);
      if(card) applyStateToCard(card, state[id]);
      closeModal(paymentModal); payNowBtn.disabled = false; payNowBtn.textContent = 'Pay';
      alert('Payment successful — design marked as purchased.');
    }, 900);
  });

  // --- Debug controls: refresh/clear state ---
  const refreshBtn = document.getElementById('refreshStateBtn');
  const clearBtn = document.getElementById('clearStateBtn');
  if(refreshBtn){
    refreshBtn.addEventListener('click', ()=>{
      reloadState();
      // re-run init to reapply UI
      initCards();
      console.info('State refreshed and UI reapplied');
      alert('State refreshed from localStorage (check console for details)');
    });
  }
  if(clearBtn){
    clearBtn.addEventListener('click', ()=>{
      if(!confirm('Clear saved premium design state and transactions? This cannot be undone.')) return;
      localStorage.removeItem(STATE_KEY); localStorage.removeItem(TX_KEY);
      reloadState();
      // refresh UI
      initCards();
      alert('State cleared');
      location.reload();
    });
  }

  function applyStateToCard(card, s){
    const badge = card.querySelector('.status-badge');
    const approveBtn = card.querySelector('.approve-btn');
    const rejectBtn = card.querySelector('.reject-btn');
    // update badge
    if(badge){
      badge.className = 'status-badge ' + (s.status || 'pending');
      badge.textContent = (s.status || 'pending').charAt(0).toUpperCase() + (s.status || 'pending').slice(1);
    }
    // show price when approved or purchased
    let priceEl = card.querySelector('.price-info');
    if(!priceEl){ priceEl = document.createElement('div'); priceEl.className = 'price-info'; priceEl.style.marginTop='8px'; card.querySelector('.design-info').appendChild(priceEl); }
    if(s.price) priceEl.textContent = 'Price: $' + Number(s.price).toFixed(2); else priceEl.textContent = '';

    // set UI based on status
    if(s.status === 'approved'){
      if(approveBtn) approveBtn.textContent = 'Charge Now';
      if(rejectBtn) rejectBtn.disabled = false;
    } else if(s.status === 'purchased'){
      if(approveBtn) { approveBtn.disabled = true; approveBtn.textContent = 'Purchased'; }
      if(rejectBtn) rejectBtn.disabled = true;
      if(badge) { badge.className = 'status-badge purchased'; badge.textContent = 'Purchased'; }
    } else if(s.status === 'rejected'){
      // Show rejection banner but keep structure so we can restore
      const info = card.querySelector('.design-info');
      if(info){
        info.innerHTML = `<div class="status-message reject"><h3>❌ Design Rejected</h3><p>This design has been removed from the premium list.</p></div>`;
      }
      // hide action buttons but keep them in DOM
      const actions = card.querySelector('.actions');
      if(actions) actions.style.display = 'none';
      // add a small restore control
      let restore = card.querySelector('.restore-btn');
      if(!restore){
        restore = document.createElement('button');
        restore.className = 'approve-btn restore-btn';
        restore.textContent = 'Restore';
        restore.style.marginLeft = '12px';
        restore.addEventListener('click', ()=>{
          const id = card.dataset.id;
          if(!id) return;
          delete state[id]; persist();
          // reload so init reapplies the original markup
          location.reload();
        });
        card.appendChild(restore);
      }
    }
  }
});
