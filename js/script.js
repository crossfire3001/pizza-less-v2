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

    if (!productInput.value.match(/^[А-Я][а-я]+\s*$/)) {
        alert('Заполните пиццу');
        return;
    }
    if (!addressInput.value.match(/^[а-яА-Я0-9,.\s]+$/)) {
        alert('Заполните заполните адрес');
        return;
    }
    /* if (!phoneInput.value.match(/^\+7\s\(9\d{2}\)\s\d{3}-\d{2}-\d{2}/)) {
        alert('Заполните телефон');
        return;
    } */

    if (!orderFilled) {
        [productInput, addressInput, phoneInput].forEach((item) => {
            item.value = "";
        });
        alert("Спасибо за заказ!");
    }
}