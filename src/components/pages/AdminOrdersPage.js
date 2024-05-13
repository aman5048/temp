import AdminOrders from "../admin/adminOrders";
import NavbarMain from "./navbars/NavbarMain";

export default function AdminOrdersPage() {
  return (
    <>
      <NavbarMain>
        <AdminOrders></AdminOrders>
      </NavbarMain>
    </>
  );
}
