/** 1.Create button at the top of the page */
const container = document.querySelector(".container");
const selectBtn = document.createElement("button");
const btnText = document.createTextNode("Reset Tiles");
selectBtn.appendChild(btnText);
selectBtn.classList.add("selectBtn");
document.body.insertBefore(selectBtn, container);

/** 2. Add event to the button */
selectBtn.addEventListener("click", (e) => {
  //how do you solve when user clicks on cancel then tiles stay the same
  while (true) {
    value = prompt("Type how many tile length you want (Maximum 100)?", "");
    if (value) {
      createGrid(parseInt(value));
      e.preventDefault();
      break;
    } else {
      continue;
    }
  }
});

/** 3. Create and delete grid */
function createGrid(value) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < value; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < value; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
    container.appendChild(row);
  }
  const tiles = document.querySelectorAll(".column");
  Array.from(tiles).map((item) => {
    item.addEventListener("mouseover", () => changeColor(item));
  });
}

// function changeColor(item) {
//   item.style.backgroundColor = "yellow";
// }

function changeColor(item) {
  item.classList.add("change-color");
}

createGrid(16);
