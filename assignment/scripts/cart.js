console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem (item) {
let newItem = basket.push(item)
return true;
}
console.log('Add new item (expect true)', addItem('fish'));
console.log('Add new item (expect true)', addItem('peanuts'));
console.log('Add new item (expect true)', addItem('blanket'));
console.log('Add new item (expect true)', addItem('airpods'));
console.log('Add new item (expect true)', addItem('book'));
console.log('New Basket is now:' , basket);


function listItems () {
    for (let i=0; i<basket.length; i++){
    return basket[i];
    }
}   

console.log('Item in Basket:', basket[0]);
console.log('Item in Basket:', basket[1]);
console.log('Item in Basket:', basket[2]);
console.log('Item in Basket:', basket[3]);
console.log('Item in Basket:', basket[4]);


function empty (){
    return basket.length=[];
}
console.log(empty(basket));
console.log('basket is?', basket);
console.log('Added airpods, expect true' , addItem('airpods'));
console.log('Added nikes, expect true' , addItem('nikes'));
console.log('Added candy, expect true' , addItem('candy'));
console.log('Added fruit, expect true', addItem('fruit'));
console.log('Added meat, expect true', addItem('meat'));
console.log(listItems());
console.log('Basket is now' , basket);
// Stretch Goals////
const maxItems = 5;
//let (basket.length)= maxItems;


function isFull () {
   (basket.length)= maxItems;
for (let i=0; i<basket.length; i++){
    if ( basket.length < maxItems ){
        return false ;
    } else if (basket.length >= maxItems ){
        return true;
    }
}
}

function removeItem() {
    if (basket.indexOf(baskets) === 0) {
      console.log(`1st item in array: ${basket}`);
    } else {
        console.log(`${baskets} already exists in the collection.`);
    }
  }
  
  

console.log('Basket is full', isFull(basket.length+6));
console.log('is basket full?', isFull(basket.length));
