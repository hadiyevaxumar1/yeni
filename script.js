
let num = document.querySelectorAll('.one');
let inputvalyuta1 = document.querySelectorAll('.mezenne1 input');
let inputvalyuta2 = document.querySelectorAll('.mezenne2 input');

valyuta();

async function valyuta() {
  let res = await fetch('currency.json');
  let json = await res.json();
  conversionRates = json.results;

  inputvalyuta1.forEach(input => {
      input.addEventListener('click', function() {
          placeholder1 = this.getAttribute('placeholder');
      });
  });

  inputvalyuta2.forEach(input => {
      input.addEventListener('click', function() {
          placeholder2 = this.getAttribute('placeholder');
      });
  });

  num.forEach(input => {
      input.addEventListener('input', function() {
          let inputValue = Number(this.value);
          calculateConverted(inputValue);
      })
  });
}

function calculateConverted(inputValue) {
      let conversionRate = conversionRates[placeholder1][placeholder2];
      let convertedValue = inputValue * conversionRate;
      showConvertedValue(convertedValue);
}

function showConvertedValue(value) {
  let conversionRate = conversionRates[placeholder1][placeholder2];
    let resultElement = document.querySelector('.ceviri');
    let num2 = document.querySelector('.two');
    resultElement.innerHTML =  ` 1 ${placeholder1} : ${conversionRate} ${placeholder2}`;
    num2.innerText = value.toFixed(2);
}
