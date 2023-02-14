let products = [{
    name: "Cube 2019",
    image: "cube2019.jpeg",
    price: "3200.00",
    qtty: 1
}, {
    name: "Gt Avlanche",
    image: "gtavalanche.jpg",
    price: "2100.00",
    qtty: 1
}, {
    name: "Trek 8",
    image: "trekfull8.jpg",
    price: "4500.00",
    qtty: 1
}];
for (let val of products) {
    document.getElementsByClassName("products")[0].innerHTML += `
    <div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
    <p class="product-title h3 m-3">${val.name}</p>
  <img class="product-image" src="${val.image}" width="200" height="200">
  <div class="product-details">
<p class="product-price h4 m-3">${val.price}€</p>
<button class=btn btn-primary product-button" type="button">ADD TO CART</button>
</div>
</div>
`;
}
// die Farben sind ganz anderes bei button und die preis ist in der linke seie!
// dieses Array ist leer ,weil ich diese Matrix jedes mal haben möchte,wenn ich ein produkt 
// hinzufügen,kommt es zu ihm ,wenn ich es es lösche ,wird es daraus gelöscht und bleibt wieder 
// leer
let cart = [];
let btns = document.getElementsByClassName("product-button");

// push weil ich  etwas in products hinzufügen will und i ist index !
// ich suuch in der wagen einkauf nach ein produckt durch find
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if (cart.find(function(val) { return val.name == products[i].name })) {
            cart[i].qtty++;
        } else {
            cart.push(products[i])
        }
        console.table(cart);
    })
}
// 53 min