let db = firebase.firestore()
let image = document.getElementById("imageContainer")
let price = document.getElementById("price")
let description = document.getElementById("description")
let button = document.getElementById("buyButton")
let title = document.getElementById("title")
let itemString
let finalArray
let itemRefId

function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}


function displayContent(response){
    console.log(response.title)
    itemRefId = response.id

 //   image.style.backgroundImage =`url(${response.image}) title=(${response.title})`//
 image.innerHTML = `<img src = "${response.image}" alt = '(${response.title})'>`
    price.innerHTML = "$"+response.price
    description.innerHTML = response.description
}



button.onclick = function() {
    if (typeof(Storage) !== "undefined") {
        //adds item to array and returns string as an array
        sessionStorage.itemRef +=  itemRefId + ","

        console.log(sessionStorage.itemRef)
    } else {
        // Sorry! No Web Storage support..
      }
    if(sessionStorage.itemRef[0] == "u" && sessionStorage.itemRef[1] == "n" && sessionStorage.itemRef[2] == "d"){
        let storage = sessionStorage.itemRef
        let spliced = storage.slice(9)
        sessionStorage.itemRef = spliced
        console.log(sessionStorage.itemRef)

    }
    location.href = "../purchase.html"

}
