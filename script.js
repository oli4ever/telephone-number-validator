document.getElementById("check-btn").addEventListener("click", validatePhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validatePhoneNumber() {
  const userInput = document.getElementById("user-input").value.trim();
  const resultsDiv = document.getElementById("results-div");

  if (!userInput) {
    alert("Please provide a phone number");
    return;
  }

  const validPhoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  const isValid = validPhoneRegex.test(userInput);

  if (isValid) {
    resultsDiv.innerText = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.innerText = `Invalid US number: ${userInput}`;
  }
}

function clearResults() {
  document.getElementById("results-div").innerText = "";
  document.getElementById("user-input").value = "";
}
