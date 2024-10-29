async function askApi(_item) {
  let response;
  if (_item) {
    response = await fetch(`https://fakestoreapi.com/products/${_item}`);
  } else {
    response = await fetch(`https://fakestoreapi.com/products`);
  }
  if (!response.ok) {
    throw new Error("Api fetch error");
  }
  const data = await response.json();
  return data;
}

export { askApi };
