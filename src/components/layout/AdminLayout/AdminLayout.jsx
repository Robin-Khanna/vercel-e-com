import { Outlet } from "react-router-dom";
import AdminNavbar from "../../navigation/Admin/AdminNavbar/AdminNavbar";

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
}

export default AdminLayout;