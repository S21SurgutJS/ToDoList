'use-strict';
import { storage } from './modules/storage.js';
import { render } from './modules/render.js';
import { controlButton, controlInput } from './modules/constants.js'

function run() {
  controlButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (controlInput.value.trim().length) {
      storage.addItem({
        id: storage.getNextId(),
        text: controlInput.value,
        isDone: false
      });
    }
    controlInput.value = '';
    render()
  })

  storage.init()
  render()
}

run()
