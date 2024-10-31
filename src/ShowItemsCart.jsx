import PropTypes from "prop-types";
function ShowItemsCart({ _data, _modifyCartContent }) {
  if (!Array.isArray(_data)) {
    _data = [_data];
  }

  return (
    <div key="items">
      {_data &&
        _data.map((item) => (
          <div key={"item_" + item.id}>
            <h5>{item.title}</h5>
            <img src={item.image} alt={item.title} style={{ width: "256px" }} />
            <button onClick={() => _modifyCartContent(item)}>ADD ITEM</button>
            <div
              className="item-cout-selector"
              style={{ display: "flex", direction: "row" }}
            >
              <button>-</button>
              <input type="number" defaultValue={item.count} />
              <button>+</button>
              <button>APPLY</button>
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
