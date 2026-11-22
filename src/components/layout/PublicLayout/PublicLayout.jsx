import { Outlet } from "react-router-dom";
import PublicNavbar from "../../navigation/Public/PublicNavbar/PublicNavbar";


function PublicLayout() {
  return (
    <>
      <PublicNavbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PublicLayout;