let selectedProduct = "";

// SHOP NOW
function scrollToShop() {
    document.getElementById("shop").scrollIntoView({
        behavior: "smooth"
    });
}

// ORDER NOW
function orderNow(productName) {

    selectedProduct = productName;

    document.getElementById("selectedProduct").innerText =
        "Product: " + productName;

    document.getElementById("orderPopup").style.display = "flex";
}

// CLOSE POPUP
function closePopup() {
    document.getElementById("orderPopup").style.display = "none";
}

// SEND ORDER
function sendOrder() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let size = document.getElementById("size").value;
    let address = document.getElementById("address").value;

    if (name === "" || phone === "" || size === "" || address === "") {
        alert("Please fill all information.");
        return;
    }

    let message =
        "Hello LifeWear!\n\n" +
        "Product: " + selectedProduct + "\n" +
        "Price: ৳499\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Size: " + size + "\n" +
        "Address: " + address;

    let whatsappNumber = "8801XXXXXXXXX";

    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}