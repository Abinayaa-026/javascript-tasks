// The Sequential Fetch Challenge

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Abinaya", "Priya", "Kavi"]);
        }, 2000);
    });
}

function fetchProducts() {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(["Laptop", "Mobile", "Headphones"]);
        }, 3000);
    });
}

async function fetchData() {
    console.time("Sequential Execution Time");

    try {
        // First fetch users
        const users = await fetchUsers();
        console.log("Users:", users);

        // After users are completed, fetch products
        const products = await fetchProducts();
        console.log("Products:", products);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.timeEnd("Sequential Execution Time");
    }
}

fetchData();