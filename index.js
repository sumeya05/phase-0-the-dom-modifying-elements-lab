// Write your code here!
// Step 1: Remove the 'main' element from the DOM
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Give it an id of 'victory'
newHeader.id = "victory";

// Step 4: Set its text content
newHeader.textContent = "YOUR-NAME is the champion";

// Step 5: Append the new <h1> to the document body
document.body.append(newHeader);
