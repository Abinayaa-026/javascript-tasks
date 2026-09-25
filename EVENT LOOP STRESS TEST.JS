// Event Loop Stress Test

console.log("A");

setTimeout(() => {
    console.log("B - setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("C - Promise");
});

console.log("D");

Promise.resolve().then(() => {
    console.log("E - Promise");
});

setTimeout(() => {
    console.log("F - setTimeout");
}, 0);

console.log("G");