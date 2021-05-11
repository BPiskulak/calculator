const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");



const convertCurrencies = (event) => {
  event.preventDefault();

  const amount = +amountElement.value;
  const currency = currencyElement.value;


  const rateEUR = 4.44;
  const rateUSD = 3.55;
  const rateGBD = 5.78;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;

    case "USD":
      result = amount / rateUSD;
      break;

    case "GBD":
      result = amount / rateGBD;
      break;
  }

  resultElement.innerText = `${result.toFixed(2)} ${currency}`;
};



const resetResult = () => {
  resultElement.innerText = "";
};


const init = () => {
  const form = document.querySelector(".js-form");
  form.addEventListener("submit", convertCurrencies);
  form.addEventListener("reset", resetResult)
};

init();
