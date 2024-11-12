import PropTypes from "prop-types";
import Button from "@mui/material/Button";
function ShowItemsShop({ _data, _addToCart }) {
  if (!Array.isArray(_data)) {
    _data = [_data];
  }

  return (
    <div key="items" className="shop-items">
      {_data &&
        _data.map((item) => (
          <div key={"item_" + item.id} className="item-container">
            <div className="image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-info">
              <h5>{item.title}</h5>
              <p>Price: {item.price}</p>
              <Button variant="contained" onClick={() => _addToCart(item)}>
                ADD ITEM
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}

ShowItemsShop.propTypes = {
  _data: PropTypes.array.isRequired,
  _addToCart: PropTypes.func,
};
export default ShowItemsShop;
