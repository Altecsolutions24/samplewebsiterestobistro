let customer;
let prom;
let order;
let add = 1;
let added = 1

document.getElementById('user_submit').onclick = function(){
    customer = document.getElementById('customer_name').value;
    document.getElementById('welcum').textContent = `Welcome to RestoBistro, ${customer} !`
    if (customer == ""){
       prom = window.prompt("Please enter something...");
       document.getElementById('welcum').textContent = `Welcome to RestoBistro, ${prom} !`
    }
}

document.getElementById('ordermenu').onclick = function() {
    window.alert(`this order was added to cart!`)
    document.getElementById('ordernav').textContent = `Orders1`

}

document.getElementById('ordermenu1').onclick = function() {
    window.alert(`this order was added to cart!`)
    order = add + added
    document.getElementById('ordernav').textContent = `Orders1`
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");

    // Show the modal after a short delay (e.g., 1 second)
    setTimeout(() => {
        modal.style.display = "flex";
    }, 1000);

    // Close modal function
    function closeModal() {
        modal.style.display = "none";
    }

    // Event listener for the close button
    closeButton.addEventListener("click", closeModal);

    // Event listener to close modal by clicking outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
