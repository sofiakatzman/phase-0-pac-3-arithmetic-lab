function add(x,y){
    return x += y;
}

function subtract(x,y){
    return x -= y;

}

function multiply(x,y){
    return x *= y;
}

function divide(x,y){
    return x /= y;
}

function increment(n){
    n ++ ;
    return n;
}

function decrement(n){
    n -- ;
    return n;
}

function makeInt(n){
    n = parseInt(n, 10); 
    return n;
}

function preserveDecimal(n) {
    n = parseFloat(n);
    return n;
}