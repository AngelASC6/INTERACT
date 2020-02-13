let db = firebase.firestore()
let image = document.getElementById("imageContainer")
let price = document.getElementById("price")
let description = document.getElementById("description")
let button = document.getElementById("buyButton")
let itemArray
let itemString
let finalArray
let itemRefId

function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}


function displayContent(response){
    console.log(response.title)
    itemRefId = response.id

    image.style.backgroundImage =`url(${response.image})`
    price.innerHTML = "$"+response.price
    description.innerHTML = response.description
}



button.onclick = function() {
    if (typeof(Storage) !== "undefined") {
        //adds item to array and returns string as an array
        sessionStorage.itemRef += itemRefId + ","
        itemString = sessionStorage.itemRef
        itemArray = itemString.split(",")
        itemArray.pop()
        console.log(itemArray)
    } else {
        // Sorry! No Web Storage support..
      }
}