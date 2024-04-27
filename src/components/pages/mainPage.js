import ProductList from "../products/productList";
import NavbarMain from "./navbars/NavbarMain";
import Footer from "./common/footer";

function MainPage() {
  return (
    <>
      <NavbarMain />
      <ProductList />
      <Footer />
    </>
  );
}

export default MainPage;
