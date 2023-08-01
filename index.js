
  const cards = document.querySelectorAll('[data-js="card"]');


  cards.forEach(card => {
  /*   const button = card.querySelector('[data-js="button"]'); */
    const link = card.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    card.addEventListener('click', () => {
      link.classList.toggle('hidden');
      arrow.classList.toggle('rotate');
    });
  });

