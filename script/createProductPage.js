let db = firebase.firestore()
let image = document.getElementById("imageContainer")
let price = document.getElementById("price")
let description = document.getElementById("description")
let button = document.getElementById("buyButton")
let itemArray
let itemString

function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}


function displayContent(response){
    console.log(response.title)
    if (typeof(Storage) !== "undefined") {
        sessionStorage.itemRef += response.id + ","
        itemString = sessionStorage.itemRef
        itemArray = itemString.split(",")
    } else {
        // Sorry! No Web Storage support..
      }
    image.style.backgroundImage =`url(${response.image})`
    price.innerHTML = "$"+response.price
    description.innerHTML = response.description
}

function moveToBuyPage() {

}

