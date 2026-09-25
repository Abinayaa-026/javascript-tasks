// Migrating to Async / Await

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Abinaya"
            });
        }, 1000);
    });
}

function fetchOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "Laptop",
                "Mobile",
                "Headphones"
            ]);
        }, 1000);
    });
}

// Aysnc / Await
async function getUserData() {

    try{
        // Get user data
        const user = await fetchUser();
        console.log("User:", user);

        // Get orders using user ID
        const orders = await fetchOrders(user.id);
        console.log("Orders:", orders);

    } catch (error) {
        console.log("Error:", error);
    }
}

// Call the function
getUserData()