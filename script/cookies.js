let db = firebase.firestore()
let image = document.getElementById("imageContainer")
let price = document.getElementById("price")
let description = document.getElementById("description")
function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}

queryDatabase('items','I7ddGrPK5nqcAMSlgCyf',function(response){
    data = response.data()
    displayContent(data)
})


function displayContent(response){
    console.log(response.title)
    image.style.backgroundImage =`url(${response.image})`
    price.innerHTML = "$"+response.price
    description.innerHTML = response.description
}

