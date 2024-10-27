async function askApi(_item) {
  let response;
  if (_item) {
    response = await fetch(`https://fakestoreapi.com/products/${_item}`);
  } else {
    response = await fetch(`https://fakestoreapi.com/products`);
  }
  const data = await response.json();
  return await data;
}

function getItems(_item) {
  const data = askApi(_item);
  return data;
}
export { getItems, askApi };
