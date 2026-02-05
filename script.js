const sheetURL =
  "https://docs.google.com/spreadsheets/d/1xDspcm37bj5S-KrU3GQtQscWCxeK1lpXOiJPRPCyLas/export?format=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split("\n").map(row => row.split(","));
    let table = document.getElementById("teamTable");

    rows.forEach((row, i) => {
      let tr = document.createElement("tr");
      row.forEach(cell => {
        let el = document.createElement(i === 0 ? "th" : "td");
        el.innerText = cell;
        tr.appendChild(el);
      });
      table.appendChild(tr);
    });
  });
