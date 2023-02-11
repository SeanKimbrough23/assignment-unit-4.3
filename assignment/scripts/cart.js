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
