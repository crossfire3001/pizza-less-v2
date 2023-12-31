$(document).ready(function() {


    if (!localStorage.getItem('cookieAccepted')) {
        $('.cookie-notification').show();
    }

    $('.accept-button').click(function () {
        $('.cookie-notification').hide();
        localStorage.setItem('cookieAccepted', '1');
})

    let cookie = {
        set: (name, value, options) => {
            if (!name || !value) {
                return null;
            }

            let string = `${name}=${value}`;
            if (options) {
                string += `; ${options}`;
            }

            document.cookie = string;
            return cookie;
        },
        get: (cookieName) => {
            const cookieString = `; ${document.cookie}`;
            const cookieArray = cookieString.split(`; ${cookieName}=`);
            if (cookieArray.length === 2)
                return cookieArray.pop().split(';').shift();
        },
        delete: (cookieName) => {
            document.cookie = `${cookieName}=;expires:Thu, 01 Jan 1970 00:00:001 GMT`;
        }
    }

    let cartArray = [];

    $('.product-button').click(function (e) {
        let productTitle = $(this)
            .closest('.product-action')
            .siblings('.product-title')
            .text()
            .trim();

        let cart = localStorage.getItem('cart');
        if (cart) {
            cartArray = JSON.parse(cart);
        }

        cartArray.push(productTitle);
        localStorage.setItem('cart', JSON.stringify(cartArray));

        cartArray.map((value, index) => {
            let cartAdd = `${index + 1}`;
            $('#cart-container').html(cartAdd);
        });



    });
});

