//how do yiuu get to the objectg with the name of the keys and values

const froyoOrderInput = prompt(
  "Please enter your frozen yogurt flavor names in quotes and seperated by commas to place your order",
  "vanilla,vanilla,chocolate,strawberry"
);
const froyoArray = froyoOrderInput.split(",");

console.log(froyoArray);

function orderNum(arr) {
  let order = {};
  for (const flavor of arr) {
    if (flavor in order) {
      order[flavor] += 1;
    } else {
      order[flavor] = 1;
    }
  }
  return order;
}
console.log(orderNum(froyoArray));
