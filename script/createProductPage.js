let db = firebase.firestore()
let image = document.getElementById("imageContainer")
let price = document.getElementById("price")
let description = document.getElementById("description")
let button = document.getElementById("buyButton")
function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}


function displayContent(response){
    console.log(response.title)
    sessionStorage.itemRef = response.id
    image.style.backgroundImage =`url(${response.image})`
    price.innerHTML = "$"+response.price
    description.innerHTML = response.description
}

function moveToBuyPage() {
    if (typeof(Storage) !== "undefined") {
        console.log(sessionStorage)
    } else {
        // Sorry! No Web Storage support..
      }
}

