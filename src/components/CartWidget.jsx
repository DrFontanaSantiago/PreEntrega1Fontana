import cart from "../assets/ovni.png";

export const CartWidget = () => {
  return (
    <div id="cart-widget">
      <img src={cart} alt="Cart" />
      <span>10</span>
    </div>
  );
};
