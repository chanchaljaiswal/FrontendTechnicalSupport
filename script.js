function toggleBox(box) {
  const boxes = document.querySelectorAll('.smallBox, .box');
  boxes.forEach(b => {
    b.classList.remove('active');
    const radio = b.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = false;
    }
   
    const optionContainer = b.querySelector('.optionContainer');
    if (optionContainer) {
      optionContainer.style.display = 'none';
    }
  });

  box.classList.add('active');
  const radio = box.querySelector('input[type="radio"]');
  if (radio) {
    radio.checked = true;
  }

  const optionContainer = box.querySelector('.optionContainer');
  if (optionContainer) {
    optionContainer.style.display = 'block';
  }
}
