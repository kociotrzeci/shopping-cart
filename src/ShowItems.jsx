import PropTypes from "prop-types";
function ShowItems({ _data, _addToCart }) {
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
            <button onClick={() => _addToCart(item)}>ADD ITEM</button>
          </div>
        ))}
    </div>
  );
}

ShowItems.propTypes = {
  _data: PropTypes.array.isRequired,
  _addToCart: PropTypes.func.isRequired,
};
export default ShowItems;
