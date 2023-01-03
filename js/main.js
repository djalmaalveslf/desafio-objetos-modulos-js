import Order from './models/order.js';
import * as orderService from './services/order-service.js'

const data = document.getElementById("data").innerHTML.split("\n").map(x => Number(x));

const order = new Order(data[0],data[1],data[2]);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${orderService.total(order).toFixed(2)}`);

//document.getElementById("data").innerHTML = 
//`Pedido código ${order.code}\nValor total: R$ ${orderService.total(order).toFixed(2)}`;