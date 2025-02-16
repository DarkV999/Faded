function addToCart() {
    alert('Currently, Contact this email to follow through with your purchase as we do not have a shipment available right now.');
}

function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

window.onload = function () {
    if (getUser()) {
        alert("Welcome back, " + getUser().email);
    }
};
