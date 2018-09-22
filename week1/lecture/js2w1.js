{

function main() {

    // DOM MANIPULATIONS

    // 1. Finding Elements
    // 1.a. getElementsByTagName
    const linkElems = document.body.getElementsByTagName("a");
    const firstLinkElem = linkElems[0];
    console.log("Link href is: " + firstLinkElem.href);

    // 1.b. getElementById
    const imageElem = document.getElementById("doggy");
    console.log("Doggy image source is: " + imageElem.src);

    // 2. Attributes
    const paragraphElems = document.body.getElementsByTagName("p");
    for (const paragraphElem of Array.from(paragraphElems)) {
      if (paragraphElem.getAttribute("data-classified") === "secret") {
        paragraphElem.remove();
      }
    }

    // 3. Styling
    const colorElem = document.getElementById("color");
    console.log(colorElem.style.color);
    colorElem.style.color = "magenta";
    colorElem.innerText = "I am magenta text.";

    // EVENTS & EVENTS PROPAGATION

    // 1. addEventListener
    // a. on a specific dom element:
    const parentElem = document.getElementById("parent-element");
    parentElem.addEventListener("click", function () {
      console.log("Handler for parent element.");
    });
    
    pizzaSelectElem = document.getElementById("pizza-price");
    pizzaSelectElem.addEventListener("change", function(event) {
    	console.log("You selected a " + pizzaSelectElem.options[pizzaSelectElem.selectedIndex].text + " pizza and the option's value is " + pizzaSelectElem.value);
    })

    // b. on the main window
    window.addEventListener("click", function () {
      // console.log("You knocked?");
    });

    // using arrow function - just worth mentioning, not going too much in detail
    // window.addEventListener("click", () => {
    // 	console.log("You knocked?");
    // });    
  }

  window.onload = main;
}
