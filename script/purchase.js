let itemIntro = document.getElementById("itemNumber")
let itemString = sessionStorage.itemRef
let itemArray = itemString.split(",")
itemArray.pop()



itemIntro.innerHTML = `${itemArray.length} Items in the cart`
