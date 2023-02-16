console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; // basket is set to an empty array
function addItem (item) {
let newItem = basket.push(item)
return true; // created a function addItem which takes an input newItem and adds it to basket array
}
console.log('Add new item (expect true)', addItem('fish')); //added fish to array
console.log('Add new item (expect true)', addItem('peanuts')); // added peanuts to array
console.log('Add new item (expect true)', addItem('blanket')); // added blanket to array
console.log('Add new item (expect true)', addItem('airpods')); // added airpods to array
console.log('Add new item (expect true)', addItem('book')); // added book to array
console.log('New Basket is now:' , basket);


function listItems () { //created a function listItems that lists all items currenty in basket array
    for (let i=0; i<basket.length; i++){
    return console.log(basket[i]);
    }
}   

console.log('Item in Basket:', basket[0]); // logged the array item fish
console.log('Item in Basket:', basket[1]); // logged the array item peanuts
console.log('Item in Basket:', basket[2]); // logged the array item blanket
console.log('Item in Basket:', basket[3]); // logged the array item airpods
console.log('Item in Basket:', basket[4]); // logged the array item book


function empty (){ // created a function empty 
    return basket.length=0; // when function is called it should empty that array to 0 items
}
console.log(empty(basket.length)); // logged the basket length after it is emptied
console.log('basket is?', basket.length); //array length should be 0
console.log('Added airpods, expect true' , addItem('airpods')); // used addItem function to add airpods to array
console.log('Added nikes, expect true' , addItem('nikes')); // used addItem function to add nikes to array
console.log('Added candy, expect true' , addItem('candy')); // used addItem function to add candy to array
console.log('Added fruit, expect true', addItem('fruit')); // used addItem function to add fruit to array
console.log('Added meat, expect true', addItem('meat')); // used addItem function to add meat to array
console.log('Added donuts, expect true', addItem('donuts'));// used addItem function to add donuts to array
console.log(listItems()); // console should list all 6 items in array
console.log('Basket is now' , basket.length); // array = 6
// Stretch Goals////
const maxItems = 5; // created global variable maxItems = 5
//let (basket.length)= maxItems;


function isFull () {// created function isFull
   (basket.length)=== maxItems; // set basket.length is set to maxItems which is 5
for (let i=0; i<basket.length; i++){
    if ( basket.length < maxItems ){ // if basket array is less than 5 return false
        return false ;
    } else if (basket.length >= maxItems ){ // if basket array is greater than or equal to 5 return true
        return true;
    } else {
        console.log('Basket is full', isFull(-1));
    }
}
}

function removeItem() { // created function removeItem
    if (basket.indexOf(basket) === 0) {
      console.log(`1st item in array: ${basket}`); //logged 1st item in basket
    } else {
        console.log(`${basket} already exists in the collection.`);
    }
  }


console.log('Basket is full', isFull(basket.length+6));
console.log('is basket full?', isFull(basket.length));
