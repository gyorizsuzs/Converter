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
    let dividedNum;
    let remainderNum;

    if (number === 0) return 'zero';

    // Numbers below 0

    if (number < 0) {
      result.push('minus');
      result.push(doTheMath(-number, orderValueIndex));
      return result.join(' ');
    }

    // Numbers over 100

    if (number > 99) {
      const commDIndex = orderValues.findIndex((orderValue, i) => {
        if (i <= orderValueIndex) return false;
        dividedNum = Math.floor(number / orderValue);
        if (dividedNum > 0) {
          if (dividedNum < 10 && number > 1099 && number < 2000) {
            return false;
          }
          return true;
        } else {
          return false;
        }
      });

      remainderNum = number % orderValues[commDIndex];
      const commonDenom = orders[commDIndex];
      result.push(doTheMath(dividedNum, commDIndex));
      result.push(commonDenom);
      if (remainderNum > 0) {
        if (remainderNum < 100) {
          result.push('and');
        }
        result.push(doTheMath(remainderNum));
      }

      return result.join(' ');

      // Numbers between 0-99
    } else {
      if (number < 10) {
        return ones[number];
      }
      if (number > 9 && number < 20) {
        return teens[number - 10];
      }
      if (number >= 20) {
        dividedNum = Math.trunc(number / 10);
        remainderNum = number - dividedNum * 10;

        result.push(tens[dividedNum]);

        if (remainderNum > 0) {
          result.push(ones[remainderNum]);
        }
        return result.join('-');
      }
    }
  }
  return doTheMath(number);
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
