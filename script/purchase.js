let itemIntro = document.getElementById("itemNumber")
let itemString = sessionStorage.itemRef
let itemArray = itemString.split(",")
let db = firebase.firestore()

itemArray.pop()
//get reference for the textboxes
let billingCountryBox = document.getElementById("billingCountry")
let billingFullNameBox = document.getElementById("billingFullName")
let billingAdressBox1 = document.getElementById("billingAdress1")
let billingAdressBox2 = document.getElementById("billingAdress2")
let billingZipcodeBox = document.getElementById("billingZipcode")
let cardNumber = document.getElementById("cardNumber")



itemIntro.innerHTML = `${itemArray.length} <span id="itemWord" onclick="dropDown()">Items</span> in the cart`

function dropDown() {
    console.log("hey")
    pushToDatabase()
}

function pushToDatabase(){
    db.collection("users").add({
        "Billing Country": billingCountryBox.value,
        "Billing Name": billingFullNameBox.value,
        "Billing Adress Line 1": billingAdressBox1.value,
        "Billing Adress Line 2": billingAdressBox2.value,
        "Billing Zip Code": billingCountryBox.value,
        "Card Number": cardNumber.value
    })
}

