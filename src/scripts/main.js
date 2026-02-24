'use strict';

function addingPlaceholderAndLabel(element, index, arr) {
  const elementLabel = document.createElement('label');

  element.placeholder =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);

  elementLabel.className = 'field-label';
  elementLabel.htmlFor = element.id;
  elementLabel.textContent = element.name.toUpperCase();
  element.parentElement.prepend(elementLabel);
}

const allInput = [...document.querySelectorAll('.field-text')];

allInput.forEach(addingPlaceholderAndLabel);
