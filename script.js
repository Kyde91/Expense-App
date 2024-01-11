var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
  var item = document.getElementById("item").value;
  var date = document.getElementById("date").value;
  var cost = document.getElementById("cost").value;

  if (!item || !date || !cost) {
    alert("Please fill in all the boxes!");
    return;
  }

  var display = document.getElementById("display");

  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = item;
  cell2.innerHTML = date;
  cell3.innerHTML = cost;
  cell4.innerHTML = "<button>X</button>";

  cell4.addEventListener("click", (e) => {
    document.getElementById("display").deleteRow(-1);
    row--;
  });

  row++;
}
