document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
}

let productInput = document.getElementById('product-input');
let addToCartButtons = document.getElementsByClassName('btn-add-to-cart');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function (e) { productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        document.getElementsByClassName('order')[0].scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    }
}

document.getElementById('create-order').onclick = function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    let orderFilled = false;

    if (!productInput.value) {
        alert('Заполните пиццу');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните заполните адрес');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните телефон');
        return;
    }

    if (!orderFilled) {
        [productInput, addressInput, phoneInput].forEach((item) => {
            item.value = "";
        });
        alert("Спасибо за заказ!");
    }
}