import NavbarMain from "./navbars/NavbarMain";
import UserOrders from "../user/userOrders";

export default function UserOrdersPage() {
  return (
    <div>
      <NavbarMain>
        <UserOrders />
      </NavbarMain>
    </div>
  );
}
