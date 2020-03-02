let itemIntro = document.getElementById("itemNumber")
let itemString = sessionStorage.itemRef
let itemArray = itemString.split(",")
let db = firebase.firestore()
let shippingContent = document.getElementById("shippingInformation")

itemArray.pop()
//get reference for the textboxes
let billingCountryBox = document.getElementById("billingCountry")
let billingFullNameBox = document.getElementById("billingFullName")
let billingAdressBox1 = document.getElementById("billingAdress1")
let billingAdressBox2 = document.getElementById("billingAdress2")
let billingZipcodeBox = document.getElementById("billingZipcode")
let cardNumber = document.getElementById("cardNumber")

//reference for the checkboxes
let sameBox = document.getElementById("sameBox")
let diffrentBox = document.getElementById("diffrentBox")


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

//runs when check boxes are clicked
function diffrentClick(){
    if(diffrentBox.checked){
        console.log("diffrent")
    }
        //unchecks other checkbox and displays the shipping inputs
    sameBox.checked = false
    shippingContent.style.display = "flex"
}

function sameClick(){
    if(sameBox.checked){
        console.log("same")
    }
    //unchecks other checkbox and hids the shipping boxes
    diffrentBox.checked = false
    shippingContent.style.display = "none"
}