function ShowItems({ _data, _addToCart }) {
  return (
    <div key="items">
      {_data &&
        _data.map((item) => {
          return (
            <>
              <div key={"item_" + item.id}>
                <h5>{item.title}</h5>
                <img
                  src={item.images[0]}
                  alt="item.title"
                  style={{ height: "256px", width: "256px" }}
                />
                <button onClick={_addToCart(item)}>add to cart</button>
              </div>
            </>
          );
        })}
    </div>
  );
}
export default ShowItems;
