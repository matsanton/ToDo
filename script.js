import * as Element from './elements.js';

// Handles click on button
Element.addButton.addEventListener('click', (e) => {
   let text = Element.inputBox.value;
   if (text) {
      text += '<i class="fa fa-trash-o" aria-hidden="true"></i>';
      const item = document.createElement('li');
      item.innerHTML = text;
      Element.itemList.appendChild(item);
      Element.inputBox.value = '';
      Element.inputBox.focus();
   }
});

// Handles press on Enter
Element.inputBox.addEventListener('keyup', (e) => {
   if (e.key == 'Enter') {
      Element.addButton.click();
   }
});

// Handles click on list item
Element.itemList.addEventListener('click', (e) => {
   const target = e.target;
   // if click on trash can
   if (target.nodeName.toLowerCase() == 'i') {
      const item= target.parentNode;
      const list = item.parentNode;
      list.removeChild(item);      
   } 
   
   if (target.nodeName.toLowerCase() == 'li') {
      target.classList.toggle('purchased');
   }
});

Element.inputBox.focus();





