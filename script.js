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

  function doTheMath(number, orderValueIndex = -1) {
    const result = [];
    let num = number.toString();

    if (number === 0) return 'zero';

    // Numbers below 0

    if (number < 0) {
      result.push('minus');
      result.push(doTheMath(-number, orderValueIndex));
      return result.join(' ');
    }

    // Numbers over 100

    if (number > 99) {
      if (num.length == 3) {
        if (num[1] === '0' && num[2] === '0') {
          return ones[num[0]] + ' ' + orders[0];
        } else {
          if (num[2] === '0') {
            return ones[num[0]] + ' ' + orders[0] + ' and ' + tens[num[1]];
          } else {
            return (
              ones[num[0]] +
              ' ' +
              orders[0] +
              ' and ' +
              tens[num[1]] +
              '-' +
              ones[num[2]]
            );
          }
        }
      }

      if (num.length == 4) {
        if (num[(1, 2, 3)] === '0') {
          return ones[num[0]] + ' ' + orders[1];
        }
        if (num[(2, 3)] === '0') {
          if (num[(0, 1)] < 20) return teens[num[(0, 1)]] + ' ' + orders[0];
        }
        if (num[3] === '0') {
          return teens[num[(0, 1)]] + ' ' + orders[0] + ' and ' + tens[num[2]];
        }
        if (num[(1, 2)] === '0') {
          return ones[num[0]] + ' ' + orders[1] + ' and ' + ones[num[3]];
        }
        if (num[1] === '0') {
          return ones[num[0]] + ' ' + orders[1] + ' and ' + tens[num[(2, 3)]];
        }
        if (num[2] === '0') {
          return teens[num[(0, 1)]] + ' ' + orders[0] + ' and ' + ones[num[3]];
        } else {
          return (
            teens[num[(0, 1)]] +
            ' ' +
            orders[0] +
            ' and ' +
            tens[num[2]] +
            '-' +
            ones[num[3]]
          );
        }
      }
    }
    return doTheMath(number);
  }
}

function converter(inputData) {
  const output = document.getElementById('output');

  try {
    output.innerText = numToStr(inputData);
    console.log(inputData, numToStr(inputData));
  } catch (err) {
    output.innerText = err.message;
  }
}

function handleClick() {
  const inputData = document.getElementById('input').value;
  converter(inputData);
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
