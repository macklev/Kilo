document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    console.log('Hover:', card.innerText);
  });
});