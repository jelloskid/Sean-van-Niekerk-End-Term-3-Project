/* 1. create
two variables: one to store the
subtotal of the order, the other
to hold the cost of shipping
the order; so the variables are
named accordingly: subtotal(13+1)*5;
and shipping 0.5*(13+1). */



let subtotal = (13+1)*5; 
let shipping =0.5*(13+1);
let total =(subtotal+shipping);
//subtotal should be 70 and shipping value should be 7




// 2. Create the total by combining the subtotal and shipping values

console.log(subtotal)
console.log(shipping)
console.log(total)




// 3.  Write the results to the screen



document.getElementById=("subtotal").innerHTML=subtotal;
document.getElementById=("shipping").innerHTML=shipping;
document.getElementById=("total").innerHTML=total;


/* example: 
elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;

*/





