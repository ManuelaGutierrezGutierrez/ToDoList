const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (event) => {
	event.preventDefault();
	const text = input.value;

	if (text !== "") {
		const li = document.createElement("li");
		const p = document.createElement("p");
		p.textContent = text;
		li.appendChild(p);
		li.appendChild(addDeleteBtn());
		ul.appendChild(li);

		input.value = "";
		empty.style.display = "none";
	}
});

const addDeleteBtn = () => {
	deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.className = "btn-delete";

	deleteBtn.addEventListener("click", (event) => {
		const deleteItem = event.target.parentElement;
		ul.removeChild(deleteItem);
	});
	return deleteBtn;
};
