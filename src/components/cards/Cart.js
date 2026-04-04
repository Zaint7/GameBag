import { useCart } from "../../CartContext";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdLocalShipping, MdAdd, MdRemove } from "react-icons/md";

const FREE_SHIPPING_THRESHOLD = 500000;

function Cart({ isOpen, onClose }) {
  const { cartItems, cartTotal, addToCart, removeFromCart, deleteFromCart } = useCart();

  const formatPrice = (value) =>
    value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });

  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal;
  const shippingFree = cartTotal >= FREE_SHIPPING_THRESHOLD;

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={onClose} />}

      {/* Panel */}
      <div className={`cart-panel ${isOpen ? "cart-panel--open" : ""}`}>

        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <PiShoppingCartSimple className="cart-header-icon" />
            <span>Mi carrito</span>
          </div>
          <button className="cart-close" onClick={onClose}>
            <IoClose />
          </button>
        </div>

        {/* Barra de envío gratis */}
        <div className="cart-shipping-bar">
          {shippingFree ? (
            <div className="cart-shipping-msg cart-shipping-msg--free">
              <MdLocalShipping /> ¡Tienes envío gratis!
            </div>
          ) : (
            <div className="cart-shipping-msg">
              <MdLocalShipping />
              Te faltan <strong>{formatPrice(remaining)}</strong> para envío gratis
            </div>
          )}
          <div className="cart-shipping-progress">
            <div
              className="cart-shipping-fill"
              style={{ width: `${Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Lista de productos */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <PiShoppingCartSimple className="cart-empty-icon" />
              <p>Tu carrito está vacío</p>
              <span>Añade productos para comenzar</span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{formatPrice(item.price)}</p>
                  <div className="cart-item-controls">
                    <button className="cart-qty-btn" onClick={() => removeFromCart(item.id)}>
                      <MdRemove />
                    </button>
                    <span className="cart-qty">{item.quantity}</span>
                    <button className="cart-qty-btn" onClick={() => addToCart(item)}>
                      <MdAdd />
                    </button>
                    <button className="cart-delete-btn" onClick={() => deleteFromCart(item.id)}>
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
                <div className="cart-item-subtotal">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer con total */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-value">{formatPrice(cartTotal)}</span>
            </div>
            {shippingFree && (
              <div className="cart-envio-row">
                <span>Envío</span>
                <span className="cart-envio-free">Gratis</span>
              </div>
            )}
            <button className="cart-checkout-btn">
              Finalizar compra
            </button>
            <button className="cart-continue-btn" onClick={onClose}>
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;