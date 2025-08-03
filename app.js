const desc = document.getElementById("desc");
const amountValue = document.getElementById("amount");
const btn = document.getElementById("btn");
const list = document.getElementById("expense-list");
const totalCost = document.getElementById("total-cost");

const expenseList = [];

btn.addEventListener("click", () => {
  const description = desc.value.trim();
  const amountValue = amount.value;

  if (!description || isNaN(amountValue) || amountValue < 0) {
    alert("Please input a real cost");
    return;
  }

  const expenses = {
    description: description,
    amount: amountValue,
  };

  expenseList.push(expenses);

  displayExpenses();
});

function displayExpenses() {
  list.innerHTML = "";

  expenseList.forEach((item, index) => {
    const entry = document.createElement("p");
    entry.textContent = `${index + 1}.${item.description} - ${item.amount} tk`;
    list.appendChild(entry);
  });
}

console.log(expenseList);
