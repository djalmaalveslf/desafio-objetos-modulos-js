import * as shippingService from './shipping-service.js';

export function total(order){  
  const shipping = shippingService.shipment(order);
  const value = (order.basic - ((order.basic * order.discount) / 100)) + shipping;
  return value;
}