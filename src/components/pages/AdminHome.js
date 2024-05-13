import AdminProductList from "../products/productListSlice";
import NavbarMain from "./navbars/NavbarMain";
import Footer from "./common/footer";
import ProductList from "../products/productList";

export default function AdminHome() {
  return (
    <>
      <NavbarMain>
        <AdminProductList />
      </NavbarMain>
      <Footer />
    </>
  );
}
