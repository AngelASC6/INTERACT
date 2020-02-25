let itemIntro = document.getElementById("itemNumber")
let itemString = sessionStorage.itemRef
let itemArray = itemString.split(",")
itemArray.pop()



itemIntro.innerHTML = `${itemArray.length} <span id="itemWord" onclick="dropDown()">Items</span> in the cart`

function dropDown() {
    console.log("hey")
}

