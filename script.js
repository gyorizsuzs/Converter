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

function numToStr(numeral) {
  /*******************************************/

  /*                   Data                  */

  /*******************************************/

  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const orders = ['trillion', 'billion', 'million', 'thousand', 'hundred'];
  const orderValues = [1e12, 1e9, 1e6, 1e3, 1e2];
  const number = Number.parseInt(numeral);

  // Javascript allows plain numbers to a maximum of ~1.79e308

  /*******************************************/

  /*               Base Logic                */

  /*******************************************/
}

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
