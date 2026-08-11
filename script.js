let selectedProduct = "";

function orderNow(productName) {

    selectedProduct = productName;

    document.getElementById("selectedProduct").innerText =
        "Product: " + productName;

    document.getElementById("orderPopup").style.display = "flex";
}

function closePopup() {

    document.getElementById("orderPopup").style.display = "none";
}

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
        "Price: 499 BDT\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Size: " + size + "\n" +
        "Address: " + address;

    let whatsappNumber = "8801733697137";

    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;
}
