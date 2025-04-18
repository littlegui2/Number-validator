const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const validPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

checkBtn.addEventListener("click", () => {
  const number = input.value;

  // Verifica se está vazio ou contém apenas espaços
  if (!number || !number.match(/\S/)) {
    alert("Please provide a phone number");
    return;
  }

  if (validPhoneRegex.test(number)) {
    resultDiv.textContent = `Valid US number: ${number}`;
  } else {
    resultDiv.textContent = `Invalid US number: ${number}`;
  }
});

clearBtn.addEventListener("click", () => {
  resultDiv.textContent = "";
});
