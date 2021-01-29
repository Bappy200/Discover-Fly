
const firstClassIncrement = document.getElementById('first-class-increment');
firstClassIncrement.addEventListener('click',function(){
    bookingUpdate('first-class-count', 1);
   subTotal(150);

})

const firstClassDecrement = document.getElementById('first-class-decrement');
firstClassDecrement.addEventListener('click',function(){
   const isDecrement =  bookingUpdate('first-class-count', -1);
   if(isDecrement){
       subTotal(-150);
   }
    
})


// COUNT UPDATING FUNCTION
function bookingUpdate(id, countNumber){
    const booking = document.getElementById(id);
    const bookingCount =  parseInt(booking.value) + countNumber;
    if(bookingCount >= 0 ){
        booking.value = bookingCount;
        return true;
    }
}


//subtotal add
function subTotal(many){
    const subTotal = document.getElementById('subtotal');
    const subTotalMany = parseInt(subTotal.innerHTML) + many;
    subTotal.innerText = subTotalMany;

    const vat = subTotalMany * .1;
    document.getElementById('vat').innerText = vat;

    const totalMany = subTotalMany + vat;
    document.getElementById('total').innerText = totalMany; 
}
