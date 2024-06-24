var FN = document.getElementById("fn");
var quantity = document.getElementById("qun");
var price = document.getElementById("pr");
var desc = document.getElementById("des")
var z = document.getElementById("f1")
var container = [], product = {};
function add() {
    product = {
        fn: FN.value,
        quantity: quantity.value,
        price: price.value,
        description: desc.value,
    }
    container.push(product);
    clear();
    displayall();
}


function clear() {
    FN.value = "";
    quantity.value = "";
    price.value = "";
    desc.value = "";

}

function displayall() {
var all=""
    for (let i = 0; i < container.length; i++) {
        all += `<tr>
                    <td>${container[i].fn}</td>
                    <td>${container[i].quantity}</td>
                    <td>${container[i].price}</td>
                    <td>${container[i].description}</td>
                    <td><button onclick="delet_element(${i})" class="btn btn-danger">Delete</button></td>
                    <td><button class="btn btn-primary">Update</button></td>
                </tr>`
    }
    z.innerHTML = all;
}
function delet_element(i) {
    container.splice(i,1);
    displayall();
}
