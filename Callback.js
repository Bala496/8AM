//callback 

const a = (k) =>{
    console.log("function1 is executed");
    k();
}

function b() {
    console.log("function2 is executed");
    
}
a(b);

function bookroom(a) {

    setTimeout(() => {
        console.log("Room is booked");
        a();
    }, 3000);
}

function checkin() {
    console.log("I am check in the room");
    
}
bookroom(checkin);

function name(b) {
    let a =10;
    console.log(a);
    b = "git";
    console.log(b);
    
}