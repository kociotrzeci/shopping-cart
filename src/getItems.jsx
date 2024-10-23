async function askApi() {
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=1&limit=10"
  );
  const data = await response.json();
  return await data;
}

function getItems() {
  const data = askApi();
  console.log;
  return data;
}
export { getItems, askApi };
