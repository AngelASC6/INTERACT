let db = firebase.firestore()

function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}

queryDatabase('items','I7ddGrPK5nqcAMSlgCyf',function(response){
    data = response.data()
    displayContent(data)
})


function displayContent(response){
    console.log(response.title)
}