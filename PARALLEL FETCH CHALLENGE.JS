// The Parallel Fetch Challenge

function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Abinaya", "Priya", "Kavi"]);
        }, 2000);
    });
}

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Laptop", "Mobile", "Headphones"]);
        }, 3000);
    });
}

async function fetchData() {
    console.time("Total Execution Time");

    try {
        // Fetch both sources at the same time
        const [users, products] = await Promise.all([
            fetchUsers(),
            fetchProducts()
        ]);

        console.log("Users:", users);
        console.log("Products:", products);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.timeEnd("Total Execution Time");
    }
}

fetchData()