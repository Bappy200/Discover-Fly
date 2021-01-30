//first class increment event
const firstClassIncrement = document.getElementById('first-class-increment');
firstClassIncrement.addEventListener('click',function(){
    bookingUpdate('first-class-count', 1);
    subTotal(150);

})


//first class decrement event
const firstClassDecrement = document.getElementById('first-class-decrement');
firstClassDecrement.addEventListener('click',function(){
   const isDecrement =  bookingUpdate('first-class-count', -1);
   if(isDecrement){
       subTotal(-150);
   }  
})


//economy class increment event
const economyClassIncrement = document.getElementById('economy-class-increment');
economyClassIncrement.addEventListener('click',function(){
    bookingUpdate('economy-class-count',1);
    subTotal(100);
})


//economy class decrement event
const economyClassDecrement = document.getElementById('economy-class-decrement');
economyClassDecrement.addEventListener('click',function(){
   const isDecrement =  bookingUpdate('economy-class-count', -1);
   if(isDecrement){
       subTotal(-100);
   }  
})


//booking update increment or decrement
function bookingUpdate(id, countNumber){
    const booking = document.getElementById(id);
    const bookingCount =  parseInt(booking.value) + countNumber;
    if(bookingCount >= 0 ){
        booking.value = bookingCount;
        return true;
    }
}


//update subtotal vat and total amount
function subTotal(amount){
    const subTotal = document.getElementById('subtotal');
    const subTotalCost = parseInt(subTotal.innerHTML) + amount;
    subTotal.innerText = subTotalCost;

    const vat = subTotalCost * .1;
    document.getElementById('vat').innerText = vat;

    const totalCost = subTotalCost + vat;
    document.getElementById('total').innerText = totalCost; 
}


//user alert when book now button click 
const bookNow = document.getElementById('book-now');
bookNow.addEventListener('click',function(){
    const totalAmount = parseInt(document.getElementById('total').innerText);
    if(totalAmount>109){
        alert('Your total amount is $'+totalAmount+'. Are you conform?');
    }
})