// Task 1: Merging User Profiles with Spread Operator

// You have a default settings object and a user-updated settings object.

// Use the spread operator (...) to combine both objects into a new object called finalSettings.

let defaultSettings = {
    theme: "light",
    display: "dark",
    brightness: "medium",
    language: "English",
    notifications: true
};

let userUpdated = {
    theme: "dark",
    display: "light",
    brightness: "low",
    notifications: false
};

let finalSettings = {
    ...defaultSettings,
    ...userUpdated
};

console.log(finalSettings);



