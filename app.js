const cart = [2, 10, 244, 99, 20, 33, 250];

const products = {
    2: '🍬 Um pacote de balas',
    10: '📓 Um caderno pequeno',
    20: '🍕 Uma pizza individual',
    33: '📐 Um estojo de material escolar',
    99: '👕 Uma camiseta de marca',
    244: '🎧 Um fone de ouvido Bluetooth',
    250: '🎮 Um controle de videogame'
};

let finalValue = 0;
let originalValue = 0;

function calculateDiscount(prince, discount) {
    return (prince * discount) / 100;
}

cart.forEach(value => {
    originalValue += value;

    if (value > 30) {
        const discount = calculateDiscount(value, 10);
        finalValue += (value - discount);
    } else {
        finalValue += value;
    }
});

const descount = (originalValue - finalValue);
const inPercentage = (descount / originalValue) * 100;

document.getElementById('value-original').textContent = `R$ ${originalValue.toFixed(2)}`;
document.getElementById('value-final').textContent = `R$ ${finalValue.toFixed(2)}`;
document.getElementById('value-descount').textContent = `R$ ${descount.toFixed(2)} 
= (${inPercentage.toFixed(2)}%) `;

const productList = document.getElementById('product-list');

cart.forEach(value => {
    const item = document.createElement('li');
    item.textContent = `${products[value]} : R$ ${value.toFixed(2)}`;
    productList.appendChild(item);
});