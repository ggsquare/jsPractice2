let num = 5;

var goodName = false;
var userName;

while(!goodName){
    userName = prompt('Please enter your username');

    if(confirm('Are you sure about ' + userName + '?') && typeof userName === 'string'){
        alert('Okay');
        goodName = true;
    }
}

var arr = [1,2,3,4,5];

//erase value
arr[2] = undefined;

console.log(arr);