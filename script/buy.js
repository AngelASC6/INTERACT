let pageContent =document.getElementById("items")
let db = firebase.firestore()
let data
//gets info from the database
function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}

function getData(){
    queryDatabase("users","john",function(response){
        console.log("Hello")
        data = response.data()
        console.log(data.Name)
    })
}


function makeCards(title,image,description,price){
    pageContent.innerHTML += `
        <div class ="card" onclick="window.location.href = 'product_html/${title}.html'">
            <img src="${image}" alt="">
            <h2>$${price}</h2>
            <h4>${title}</h4>
            <h3>${description}</h3>
        </div>

    `
}


function test(){
    db.collection("items").get().then(function(response){
        response.forEach(function(doc){
            data = doc.data()
            makeCards(data.title,data.image,data.description,data.price)
            console.log(doc.id,"=>",data.title)
        })
    })
}

test()