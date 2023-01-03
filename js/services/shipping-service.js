export function shipment(order){  
    let value = 0.0;
  
    if(order.basic < 100.0){
  
      value = 20.0;
  
    }else if(order.basic >= 100.0 && order.basic < 200.0){
  
      value = 12.0;
  
    }
  
    return value;
  }