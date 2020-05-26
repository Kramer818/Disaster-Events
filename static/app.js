// from data.js
// var tableData = data;

(function () {
  console.log(data);
})();

var tbody = d3.select("tbody");

data.forEach(function (buildTable) {
  var row = tbody.append("tr");

  Object.entries(buildTable).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

// // Build the table when the page loads
// buildTable(tableData);
