let animationName = ""
let elementColor = ""
let elementText = ""
let elementSize = ""

// Can you use these two variables to change the type and text of the next element that's created?
let inputtedText = ""
 
// function that handles the input "animation-name"
const setAnimationName = (name) => {
  animationName = name
  console.log(animationName)
}

// function that handles the input "element-color"
const setElementColor = (color) => {
  elementColor = color
}

const setElementText = (text) => {
  elementText = text
}

const setElementSize = (size) => {
  elementSize = size
}



// This function creates a new element and attaches to the parent element: element-collector
const createNewElement = () => {
  const elementContainer = document.getElementById("element-collector")
  
  // create a new element with default values
  const newElement = document.createElement(elementSize)
  const textNode = document.createTextNode(elementText)

  // Using dot.notation to access the new element's properties
  newElement.appendChild(textNode)
  newElement.classList.add("animated", "infinite", animationName)
  newElement.style.color = elementColor
  

  // attach the new element to the parent
  elementContainer.appendChild(newElement)
}

