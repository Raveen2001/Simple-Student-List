let tableData = 0;
let n = 1;
function handleForm(event) {
  event.preventDefault();
  let cell, row;
  let name = document.getElementById("name").value;
  let roll = document.getElementById("rollno").value;
  let email = document.getElementById("email").value;
  let form = document.getElementById("list");
  let table = document.getElementById("table-list");
  let insert = () => {
    row = table.insertRow(n);
    cell = row.insertCell(0);
    cell.innerText = name;
    cell = row.insertCell(1);
    cell.innerText = roll;
    cell = row.insertCell(2);
    cell.innerText = email;
    cell = row.insertCell(3);
    cell.innerHTML = `<button class="table-btn" onClick="removeRow(this)">Remove</button>`;
    tableData++;
    hideDetails();
    n++;
    form.reset();
  };
  insert();
}
function hideDetails() {
  let tableDiv = document.getElementById("table-details");
  if (tableData == 0) {
    tableDiv.style.display = "none";
  } else {
    tableDiv.style.display = "block";
  }
}

function removeRow(row) {
  let table = document.getElementById("table-list");
  let index = row.parentNode.parentNode.rowIndex;
  table.deleteRow(index);
  tableData--;
  n--;
  hideDetails();
}

function removeAll() {
  for (let i = tableData; i > 0; i--) {
    let table = document.getElementById("table-list");
    table.deleteRow(i);
    tableData--;
    n--;
  }
  hideDetails();
}
