let answer;

function clickPlay() {
	let totalButtons = document.getElementById("Number").value;
	answer = Math.floor(Math.random() * totalButtons) + 1;
	let navButtons = document.getElementById("Content");
	navButtons.innerHTML = "";
	for (var i = 1; i <= totalButtons; ++i)
	{
		console.log(i + " ");
		let button = document.createElement("button");
		button.setAttribute("pageto", i);
		button.innerHTML = "Button " + i;
		navButtons.appendChild(button);
		button.addEventListener("click", function(event) {
			let btn = event.target;
			let page = btn.getAttribute("pageto");
			if (page == answer) {
				document.getElementById("Answer").textContent = "You won!";
			} else {
				document.getElementById("Answer").textContent = "You lost";
			}
    		});
		navButtons.appendChild(document.createTextNode(" "));
	}
}
