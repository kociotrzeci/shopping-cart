function ShowItems({ _data, _addToCart }) {
  // Ensure _data is an array
  if (!Array.isArray(_data)) {
    _data = [_data];
  }

  return (
    <div key="items">
      {_data &&
        _data.map((item) => (
          <div key={"item_" + item.id}>
            <h5>{item.title}</h5>
            <img
              src={item.image}
              alt={item.title} // Corrected alt attribute
              style={{ width: "256px" }}
            />
            <button onClick={() => _addToCart(item)}>ADD ITEM</button>
          </div>
        ))}
    </div>
  );
}

export default ShowItems;
