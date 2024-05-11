import NavbarMain from "./navbars/NavbarMain";
import UserProfile from "../user/userProfile";

export default function UserProfilePage() {
  return (
    <>
      <NavbarMain>
        <h1 className="mx-auto text-2xl">My Profile</h1>
        <UserProfile />
      </NavbarMain>
    </>
  );
}
