const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
  const income = [
    Number(document.getElementById("salary").value),
    Number(document.getElementById("freelancing").value),
    Number(document.getElementById("rentIncome").value),
    Number(document.getElementById("bonus").value),
  ];

  const expenses = [
    Number(document.getElementById("rentBond").value),
    Number(document.getElementById("food").value),
    Number(document.getElementById("transport").value),
    Number(document.getElementById("utilities").value),
    Number(document.getElementById("subscriptions").value),
    Number(document.getElementById("debt").value),
  ];

  const totalIncome = income.reduce((sum, value) => sum + value, 0);
  const totalExpenses = expenses.reduce((sum, value) => sum + value, 0);

  const remaining = totalIncome - totalExpenses;
  const remainingPercentage = ((remaining / totalIncome) * 100).toFixed(2);

  document.getElementById("totalIncome").value = totalIncome;
  document.getElementById("totalExpenses").value = totalExpenses;

  document.getElementById("remaining").value = "R" + remaining;
  document.getElementById("remainingPercentage").value =
    remainingPercentage + "%";
});

const loginBtn = document.getElementById("loginBtn");

function validationLogin() {
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (name === "") {
    alert("Please Enter a Name");
    return false;
  }

  if (username === "") {
    alert("Please Enter a Username");
    return false;
  }

  if (password === "") {
    alert("Provide a password");
    return false;
  }
  return true;
}

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "phila" && password === "1992") {
    alert("Logging in please wait");
  } else {
    alert("incorrect password or username");
  }
}

loginBtn.addEventListener("click", function () {
  if (validationLogin()) {
    loginUser();
  }
});

function validationBudget() {
  const salary = document.getElementById("salary").value;
  const freelancing = document.getElementById("freelancing").value;
  const bonus = document.getElementById("bonus").value;
  const rentIncome = document.getElementById("rentIncome").value;

  const rentBond = document.getElementById("rentBond").value;
  const food = document.getElementById("food").value;
  const transport = document.getElementById("transport").value;
  const utilities = document.getElementById("utilities").value;
  const subscriptions = document.getElementById("subscriptions").value;
  const debt = document.getElementById("debt").value;

  if (salary === "") {
    alert("Please enter a value in Salary");
    return false;
  }

  if (freelancing === "") {
    alert("Please enter a value in Freelancing");
    return false;
  }

  if (bonus === "") {
    alert("Please enter a value in bonus");
    return false;
  }

  if (rentIncome === "") {
    alert("Please enter a value in Rent");
    return false;
  }

  if (rentBond === "") {
    alert("Please enter a value in Rent ");
    return false;
  }

  if (food === "") {
    alert("Please enter a value in Food ");
    return false;
  }

  if (transport === "") {
    alert("Please enter a value in Transport ");
    return false;
  }

  if (utilities === "") {
    alert("Please enter a value Utilities ");
    return false;
  }

  if (subscriptions === "") {
    alert("Please enter a value in subscriptions ");
    return false;
  }

  if (debt === "") {
    alert("Please enter a value in Debt");
    return false;
  }
  return true;
}

calculateBtn.addEventListener("click", function () {
  validationBudget();
});
