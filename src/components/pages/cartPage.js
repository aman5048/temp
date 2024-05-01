import Cart from "../cart/cart";
import NavbarMain from "./navbars/NavbarMain";
import Footer from "./common/footer";
import MainPage from "./mainPage";
function CartPage() {
  return (
    <>
      <MainPage />
      <Cart />
      <Footer />
    </>
  );
}

export default CartPage;
