document.querySelectorAll('.me-accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement; 
    const content = accordionItem.querySelector('.me-accordion-content');
    const arrow = button.querySelector('.me-accordion-arrow'); 

    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.classList.remove('bi-chevron-down');
      arrow.classList.add('bi-chevron-up');
    } else {
      content.style.maxHeight = '0';
      arrow.classList.remove('bi-chevron-up');
      arrow.classList.add('bi-chevron-down');
    }
  });
});
