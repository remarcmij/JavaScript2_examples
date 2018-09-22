{
	function render(container) {
		renderListOfLinks(container);
		renderImage(container);
	}

	function renderListOfLinks(container) {

		const linkTexts = ["First Link", "Second Link", "Third Link"];

		for (let i = 0; i < linkTexts.length; i++) {
			const linkText = linkTexts[i];
			const linkElem = document.createElement("a");
			linkElem.setAttribute("href", "#");
			linkElem.innerText = linkText;
			container.appendChild(linkElem);
			container.appendChild(document.createElement("br"));
		}
	}

	function renderImage(container) {
		const imageElem = document.createElement("img");
		imageElem.setAttribute("src", "https://img.buzzfeed.com/buzzfeed-static/static/2015-07/10/13/enhanced/webdr09/original-19977-1436548372-7.jpg");
		imageElem.setAttribute("style", "height: 50px;");
		container.appendChild(imageElem);
	}

	function main() {

		const containerElem = document.getElementById("root");
		render(containerElem);

	}

	window.onload = main;
}
