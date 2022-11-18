/*******************************************/

/*                Components               */

/*******************************************/

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
        <div class="left-container">
            <input
             id="input"
             type="number"
             placeholder="Type your number here..."
             required
             />
            <button 
             onclick="handleClick()" >
             Convert
            </button>
        </div>
        <div class="right-container">
            <h2><u>Number is converted to:</u></h2>
            <p id="output">${output}</p>
        </div>
    </div>
    `;
};

const footerComponent = function (copyright, date) {
  return `
    <footer>
        <div>${copyright}</div>
        <p id="date">${date}</p>
    </footer>
    `;
};

/*******************************************/

/*              Initialization             */

/*******************************************/

function loadEvent() {
  document
    .getElementById('root')
    .insertAdjacentHTML(
      'beforeend',
      headerComponent('Number to Numeral Converter') +
        converterComponent('') +
        footerComponent(
          'Copyright © 2022 <u>ZsuperConverters Ltd.</u> All rights reserved'
        )
    );

  const date = new Date();
  document.getElementById('date').innerHTML = date.toUTCString();
}

window.addEventListener('load', loadEvent);
