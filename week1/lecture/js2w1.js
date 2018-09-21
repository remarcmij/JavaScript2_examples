{
  const maartjesWork = [
    {
      task: 'Write a summary HTML/CSS',
      done: false
    },
    {
      task: 'Some web development',
      done: true
    },
    {
      task: 'Fix homework for class10',
      done: false
    },
    {
      task: 'Talk to a lot of people',
      done: false
    },
    {
      task: 'Keep writing summary',
      done: false
    },
    {
      task: 'Some more web development',
      done: false
    },
    {
      task: 'Staring out the window',
      done: false
    },
    {
      task: 'Talk to a lot of people',
      done: false
    },
    {
      task: 'Look at application assignments new students',
      done: false
    }
  ];

  function render(todos, container) {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      const li = document.createElement('li');
      container.appendChild(li);
      li.innerText = todo.task;
      if (todo.done) {
        li.setAttribute('style', 'text-decoration: line-through');
      }
    }
  }


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

    // 4. Create Elements
    const rootElem = document.getElementById('root');
    const h1Elem = document.createElement('h1');
    h1Elem.innerText = 'Maartjes work';
    rootElem.appendChild(h1Elem);
    const ulElem = document.createElement('ul');
    rootElem.appendChild(ulElem);
    render(maartjesWork, ulElem);

    // EVENTS

    // 1. addEventListener
    // a. on the main window
    window.addEventListener("click", function () {
      // console.log("You knocked?");
    });

    // using arrow function - just worth mentioning, not going too much in detail
    // window.addEventListener("click", () => {
    // 	console.log("You knocked?");
    // });

    // b. on a specific dom element:
    const buttonElem = document.getElementById("button");
    buttonElem.addEventListener("click", function () {
      console.log("Button clicked, button's listener executed!");
    });

    // 2. removeEventListener
    const buttonOnceElem = document.getElementById("button-once");
    function buttonOnceClicked() {
      console.log("Button clicked, button's handler executed only the first time!");
      buttonOnceElem.removeEventListener("click", buttonOnceClicked);
    }
    buttonOnceElem.addEventListener("click", buttonOnceClicked);

    // EVENT OBJECTS
    const buttonForMouseElem = document.getElementById("button-for-mouse");
    buttonForMouseElem.addEventListener("mousedown", function (event) {
      console.log("This was an event of type:" + event.type);
      if (event.button === 0) {
        console.log("Left button");
      } else if (event.button === 2) {
        console.log("Right button");
      }
    });

    // PROPAGATION
    const parentElem = document.getElementById("parent-element");
    const childElem = document.getElementById("child-element");
    parentElem.addEventListener("mousedown", function () {
      console.log("Handler for parent element.");
    });
    // if right button of the mouse => parent element handler not executed, otherwise it is
    childElem.addEventListener("mousedown", function (event) {
      if (event.button === 2) {
        console.log("You clicked with the right button, parent handler not executed!");
        event.stopPropagation();
      } else {
        console.log("You didn't click  with the right button, parent handler executed!");
      }
    });

  }

  window.onload = main;

  //TODO: adding multiple listeners for the same event, to the same element
  //TODO: illustrate capturing, bubbling
  //TODO: event delegation ?!
  //TODO: event.target <-> event.currentTarget ?!
}
