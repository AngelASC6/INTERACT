let itemIntro = document.getElementById("itemNumber")
let itemString = sessionStorage.itemRef
let itemArray = itemString.split(",")
let db = firebase.firestore()
let shippingContent = document.getElementById("shippingInformation")
let options = ['I7ddGrPK5nqcAMSlgCyf','nTVp45k9ODl1ktDGB2Cu']
let totalPrice = 0

itemArray.pop()
//get reference for the textboxes
let billingCountryBox = document.getElementById("billingCountry")
let billingFullNameBox = document.getElementById("billingFullName")
let billingAdressBox1 = document.getElementById("billingAdress1")
let billingAdressBox2 = document.getElementById("billingAdress2")
let billingZipcodeBox = document.getElementById("billingZipcode")
let cardNumber = document.getElementById("cardNumber")
let cartDiv = document.getElementById("cartItems")

let shippingCountryBox = document.getElementById("shippingCountry")
let shippingFullNameBox = document.getElementById("shippingFullName")
let shippingAdressBox1 = document.getElementById("shippingAdress1")
let shippingAdressBox2 = document.getElementById("shippingAdress2")
let shippingZipcodeBox = document.getElementById("shippingZipcode")

//reference for the checkboxes
let sameBox = document.getElementById("sameBox")
let diffrentBox = document.getElementById("diffrentBox")


itemIntro.innerHTML = `${itemArray.length} <span id="itemWord">Items</span> in the cart`
diffrentBox.checked = true

//goes into firebase
function queryDatabase(collectionName,refId,code) {
    db.collection(collectionName).doc(refId).get().then(code);   
}

// for(let i=0; i<itemArray.length;i++){
//     console.log(i)
//     console.log(itemArray[i])
//     queryDatabase('items',itemArray[i],function(response){
//         data = response.data()
//         addCartItemsToPage(data)
//         })
// }
let ran = 0
findCartItemNumbers()
//Finds the number of items of each type
function findCartItemNumbers(){
    for(let j=0;j<options.length;j++){
        console.log("ran " + ran)
        let currentOption = options[j]
        console.log('Current Option ='+currentOption)
        let numberOfOption = 0
        console.log(itemArray)
        for(let k=0;k<itemArray.length;k++){
            console.log('Comparing to ' + itemArray[k])
            if(currentOption == itemArray[k]){
                numberOfOption ++
            }
            else{
                console.log("No Match")
            }
            console.log(numberOfOption)
        }
            if(numberOfOption>0){
                console.log("number of Options > 0")
                console.log(currentOption)
                queryDatabase('items',currentOption,function(response){
                    data = response.data()
                    addCartItemsToPage(data,numberOfOption)
                    }) 
            }
    }
}
//makes the dropdown with the cart items appear
function addCartItemsToPage(data,numberOfOption){
        console.log("Running queryDatabase")
        ran ++
        console.log(data.title + data.price)
        let totalPriceOfItem = numberOfOption * data.price
            console.log("Number of the option = " + numberOfOption)
            console.log(data)
            totalPrice += totalPriceOfItem
            cartDiv.innerHTML += 
            `<div class="itemCard">
                <div class='cartItem' id="${data.title} "><h3>${data.title}</h3></div>
                <div class="cartItem" id="${data.title + "Number"}"><h3>${numberOfOption}</h3></div>
                <div class="cartItem" id="${data.title + "Price"}"><h3 style="color:maroon;">$${totalPriceOfItem}</h3></div><br>
            </div>`
            if(ran==options.length){
                cartDiv.innerHTML += `
                <div class=itemCard>
                <div class='cartItem' style="width:100%;  border-bottom:1px black solid; padding-left:0px;"></div>
                <div class='cartItem' style="width:100/3; justify-text:center;  border-bottom:1px black solid;"><h3 style="color:maroon;">$${totalPrice}</h3></div>
                </div>
                `
            }
    }




function pushToDatabase(){
    if(diffrentBox.checked){
        db.collection("users").add({
            "Billing Country": billingCountryBox.value,
            "Billing Name": billingFullNameBox.value,
            "Billing Adress Line 1": billingAdressBox1.value,
            "Billing Adress Line 2": billingAdressBox2.value,
            "Billing Zip Code": billingZipcodeBox.value,
            "Card Number": cardNumber.value,
            "Shipping Country": shippingCountryBox.value,
            "Shipping Name": shippingFullNameBox.value,
            "Shipping Adress Line 1": shippingAdressBox1.value,
            "Shipping Adress Line 2": shippingAdressBox2.value,
            "Shipping Zip Code": shippingZipcodeBox.value
        })
    }
    else{
        db.collection("users").add({
            "Billing Country": billingCountryBox.value,
            "Billing Name": billingFullNameBox.value,
            "Billing Adress Line 1": billingAdressBox1.value,
            "Billing Adress Line 2": billingAdressBox2.value,
            "Billing Zip Code": billingZipcodeBox.value,
            "Card Number": cardNumber.value,
            "Shipping Country": billingCountryBox.value,
            "Shipping Name": billingFullNameBox.value,
            "Shipping Adress Line 1": billingAdressBox1.value,
            "Shipping Adress Line 2": billingAdressBox2.value,
            "Shipping Zip Code": billingZipcodeBox.value
        })
    }
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

