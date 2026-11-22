
import { Link } from "react-router-dom";
import "./Account.css";

function Account({ isLogin = false, userName = "Account" }) {
  return (
    <Link
      to={isLogin ? "/account" : "/login"}
      className="account"
    >
      <span className="account-icon">♙</span>
      <span>{isLogin ? userName : "Account"}</span>
    </Link>
  );
}

export default Account;
