// --- Data --- //

// --- Components --- //

const headerComponent = function (title) {
  return `
    <header>
        <h1 class="title">${title}</h1>
    </header>
    `;
};

const converterComponent = function (output) {
  return `
    <div class="input-field">
        <div class="inner-container">
            <input class="input" type="number" placeholder="number to convert" required />
            <button type="submit">Submit</button>
        </div>
        <p class="output">${output}</p>
    </div>
    `;
};

const footerComponent = function (copyright) {
  return `
    <footer>${copyright}</footer>
    `;
};

// --- Initialisation --- //

function loadEvent() {
  document
    .querySelector('#root')
    .insertAdjacentHTML(
      'beforeend',
      headerComponent('Number to Numeral Converter')
    );

  document
    .querySelector('#root')
    .insertAdjacentHTML('beforeend', converterComponent('outputComponent'));

  const inputComponent = document.querySelector('.input');
  const outputComponent = document.querySelector('.output');
  inputComponent.addEventListener('submit', (event) => {
    let inputData = event.target.value;
    outputComponent.innerHTML = inputData;
  });

  root.insertAdjacentHTML(
    'afterend',
    footerComponent(
      'Copyright © 2022 <u>ZsuperConverters Ltd.</u> All rights reserved'
    )
  );
}

window.addEventListener('load', loadEvent);
