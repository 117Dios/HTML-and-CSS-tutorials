let rose_price = 8, rose_number = 70, lily_price = 10, lily_number = 50, tulip_price = 2, tulip_number = 120;

let rose_total_value = rose_price*rose_number;
let lily_total_value = lily_number*lily_price;
let tulip_total_value = tulip_number*tulip_price;

let total = tulip_total_value + rose_total_value + lily_total_value;

console.log("Rose - unit price: "+rose_price+", quantity: "+rose_number+", value: "+rose_total_value);
console.log("Lily - unit price: "+lily_price+", quantity: "+lily_number+", value: "+lily_total_value);
console.log("Tulip - unit price: "+tulip_price+", quantity: "+tulip_number+", value: "+tulip_total_value);
console.log("Total: "+total);