import cart from "../img/shopping-cart.png"

function CartWidget() {

    return (
        <div className="cart-widget mt-2">
            <img className="" src={cart} alt="cart" width="30" height="88" />
            0
        </div>
    )
}
export default CartWidget;