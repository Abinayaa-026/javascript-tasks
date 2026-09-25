// Task 2: User Data Destructuring in Functions

// You have a user object containing properties like name and email.

let user = {
    Name : "JayaSurya",
    Email : "abc@gmail.com",
    BookingCarName : "Toyota",
    BookingID : 102,
    OTP : 123456
}
function displayuser({Name, Email}){
    console.log(Name)
    console.log(Email)
}
displayuser(user)


