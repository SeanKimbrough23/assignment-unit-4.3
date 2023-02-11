console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem (item) {
let newItem = basket.push(item)
return true;
}
console.log('Add new item', addItem('fish'));

function listItems () {
    for (let i=0; i<basket.length; i++){
    let newItem = basket [i];
    console.log('Item added to Basket', newItem);
}
}



