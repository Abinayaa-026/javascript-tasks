// Visualizing Execution Order

console.log("1. Program Started");

setTimeout(() => {
    console.log("2. setTimeout executed");
}, 2000);

console.log("3. Program is continuing...");

setTimeout(() => {
    console.log("4. Second setTimeout executed");
}, 1000);

console.log("5. Program Ended")