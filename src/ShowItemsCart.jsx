import PropTypes from "prop-types";
function ShowItemsCart({ _data, _modifyCartContent }) {
  if (!Array.isArray(_data)) {
    _data = [_data];
  }
  const modifyCart = (item, key) => {
    const existingItemIndex = _data.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const updatedData = [..._data];
    if (key === "+") updatedData[existingItemIndex].count += 1;
    else updatedData[existingItemIndex].count -= 1;
    if (updatedData[existingItemIndex].count < 1)
      updatedData.splice(existingItemIndex, 1);
    _modifyCartContent(updatedData);
  };

  return (
    <div key="items">
      {_data &&
        _data.map((item) => (
          <div key={"item_" + item.id} className="item-container">
            <h5>{item.title}</h5>
            <img src={item.image} alt={item.title} style={{ width: "256px" }} />
            <button onClick={() => _modifyCartContent(item)}>ADD ITEM</button>
            <div
              className="item-count-selector"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <button onClick={() => modifyCart(item, "-")}>-</button>
              <p>{item.count}</p>
              <button onClick={() => modifyCart(item, "+")}>+</button>
            </div>
          </div>
        ))}
    </div>
  );
}

ShowItemsCart.propTypes = {
  _data: PropTypes.array.isRequired,
  _modifyCartContent: PropTypes.func,
};

export default ShowItemsCart;
