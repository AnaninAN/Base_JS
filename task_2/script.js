function totalSum() {
    return this.price*this.quantity;
}

function sumBasket(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function createBasket(arr) {
    var $basket = document.getElementById('basket');
    var col = ['product','price','quantity','total'];
    var $field;
    
    for (var i = 0; i < col.length; i++) {
        $field = document.createElement('div');
        $field.textContent = col[i];
        $basket.appendChild($field);
    }
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < col.length; j++) {
                $field = document.createElement('div');
                if (col[j] != col[col.length-1]) {
                    $field.textContent = arr[i][col[j]];
                } else {
                    $field.textContent = arr[i].total();
                }
                $basket.appendChild($field);
            }
        }
        $field = document.createElement('div');
        $field.classList.add('total');
        $field.textContent = 'В корзине: ' + arr.length + ' товаров на сумму ' + sumBasket(arr) + ' рублей';
        $basket.appendChild($field);
    } else {
        $field = document.createElement('div');
        $field.classList.add('total');
        $field.textContent = 'Корзина пуста';
        $basket.appendChild($field);
        
    }
}

var basket = [
    {product: 'shirt', price: 200, quantity: 2, total: totalSum},
    {product: 'shorts', price: 700, quantity: 1, total: totalSum},
    {product: 'dress', price: 1100, quantity: 3, total: totalSum},
    {product: 'socks', price: 150, quantity: 5, total: totalSum},
]

createBasket(basket);