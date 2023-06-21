function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

//JSON data into Table
async function loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const { headers, rows } = await response.json();

  //Clear the table
  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  //Populate the headers
  for (const headerText of headers) {
    const headerElement = document.createElement("th");

    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
  }

  // Populate the rows
  for (const row of rows) {
    const rowElement = document.createElement("tr");

    for (const cellText of row) {
      const CellElement = document.createElement("td");

      CellElement.textContent = cellText;
      rowElement.appendChild(CellElement);
    }
    tableBody.appendChild(rowElement);
  }
}

loadIntoTable("./data.json", document.querySelector("table"));

function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  table = document.getElementById("invTable");
  tr = invTable.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
