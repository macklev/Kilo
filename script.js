document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    console.log('Hover:', card.innerText);
  });
});

const productDetails = {
  lemontastic: {
    name: 'Lemontastic',
    meta: 'Flower Jar • Bright • Citrus • Smooth',
    description: 'A sharp citrus-forward jar with a clean finish and a bright aroma profile.',
    details: [
      { label: 'TAC%', value: '27.7' },
      { label: 'THC%', value: '24.1' },
      { label: 'Genetics', value: 'Lemon Haze X Sour Diesel' },
      { label: 'Effects', value: 'Uplifting, energetic, creative, and focused.' },
      { label: 'Flavor & Aroma', value: 'A prominent citrus flavor and aroma, with diesel gas.' },
      { label: 'Best For', value: 'Daytime use, boosting creativity, combating lethargy, and improving focus.' },
      { label: 'Top Terps', value: 'Terpinolene, β-Myrcene, β-Caryophyllene' }
    ],
    bullets: ['Citrus-heavy nose', 'Smooth, upbeat profile', 'Popular daytime choice'],
    imageClass: 'lemontastic'
  },
  'exotic-fruit': {
    name: 'Exotic Fruit',
    meta: 'Flower Jar • Sweet • Fruity • Bold',
    description: 'A loud fruit blend with a sweet finish and a strong, expressive terpene profile.',
    details: [
      { label: 'TAC%', value: '28.7' },
      { label: 'THC%', value: '24.8' },
      { label: 'Genetics', value: 'Cake Mints X Platinum GSC X Lil Miss High Society' },
      { label: 'Effects', value: 'Relaxing, soothing, and clear-headed' },
      { label: 'Flavor & Aroma', value: 'Complex profile combining fruity, sweet, and floral with hints of grape candy' },
      { label: 'Best For', value: 'Low-key evening relaxation, stress relief, mental resets' },
      { label: 'Top Terps', value: 'D-Limonene, Linalool, β-Caryophyllene, β-Myrcene' }
    ],
    bullets: ['Sweet fruit notes', 'Bold aroma', 'Full-bodied finish'],
    imageClass: 'exotic-fruit'
  },
  'sunset-gelato': {
    name: 'Sunset Gelato',
    meta: 'Flower Jar • Creamy • Relaxed • Smooth',
    description: 'A creamy, mellow jar with a soft finish and an easygoing flavor profile.',
    details: [
      { label: 'TAC%', value: '22.7' },
      { label: 'THC%', value: '19.1' },
      { label: 'Genetics', value: 'Sunset Sherbet X Gelato' },
      { label: 'Effects', value: 'Uplifting, creativity, relaxing body high, munchies' },
      { label: 'Flavor & Aroma', value: 'Sweet, fruity, creamy profile with hints of berries, citrus, and vanilla' },
      { label: 'Best For', value: 'Lazy afternoons or evenings, unwinding and destressing' },
      { label: 'Top Terps', value: 'β-Myrcene, β-Caryophyllene, Valencene, Linalool' }
    ],
    bullets: ['Creamy dessert notes', 'Relaxed feel', 'Smooth draw'],
    imageClass: 'sunset-gelato'
  },
  'blueberry-sour': {
    name: 'Blueberry Sour Diesel',
    meta: 'Flower Jar • Berry • Diesel • Loud',
    description: 'A loud berry-and-diesel blend with a pungent nose and a strong finish.',
    details: [
      { label: 'TAC%', value: '25.1' },
      { label: 'THC%', value: '21.5' },
      { label: 'Genetics', value: 'Blueberry X Sour Diesel' },
      { label: 'Effects', value: 'Uplifting, energetic, creative, and relaxed' },
      { label: 'Flavor & Aroma', value: 'Sweet, fruity notes of fresh blueberries, with subtle diesel undertones' },
      { label: 'Best For', value: 'Daytime use with a balanced high' },
      { label: 'Top Terps', value: 'β-Caryophyllene, β-Myrcene, Limonene' }
    ],
    bullets: ['Berry-forward flavor', 'Diesel kick', 'Loud aroma'],
    imageClass: 'blueberry-sour'
  }
};

const productsPage = document.querySelector('.products-page');

if (productsPage) {
  const modal = document.querySelector('.product-modal');
  const modalImage = document.querySelector('.product-modal-image');
  const modalTitle = document.querySelector('#product-modal-title');
  const modalMeta = document.querySelector('.product-modal-meta');
  const modalDescription = document.querySelector('.product-modal-description');
  const modalDetails = document.querySelector('.product-modal-details');
  const cards = document.querySelectorAll('.product-card[data-product]');

  const openModal = productKey => {
    const product = productDetails[productKey];

    if (!modal || !product) {
      return;
    }

    modalImage.className = `product-modal-image ${product.imageClass}`;
    modalTitle.textContent = product.name;
    modalMeta.textContent = product.meta;
    modalDescription.textContent = product.description;
    modalDetails.innerHTML = product.details.map(detail => `
      <dl class="product-modal-detail">
        <dt>${detail.label}</dt>
        <dd>${detail.value}</dd>
      </dl>
    `).join('');
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) {
      return;
    }

    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  cards.forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.product));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(card.dataset.product);
      }
    });
  });

  modal?.addEventListener('click', event => {
    if (event.target.matches('[data-modal-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal && !modal.hidden) {
      closeModal();
    }
  });
}