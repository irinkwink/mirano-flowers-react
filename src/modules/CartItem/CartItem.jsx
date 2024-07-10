import "./cartItem.scss";
export const CartItem = ({ className, img, title, price }) => (
  <li className={`${className} item`}>
    <img className="item__img" src={img} alt={title} />
    <h4 className="item__title">{title}</h4>
    <div className="item__counter">
      <button className="item__counter-btn">-</button>
      <input
        className="item__counter-input"
        type="number"
        max="99"
        min="0"
        value="1"
      />
      <button className="item__counter-btn">+</button>
    </div>
    <p className="item__price">{price}&nbsp;₽</p>
  </li>
);
