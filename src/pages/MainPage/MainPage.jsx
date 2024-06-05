import "./MainPage.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function MainPage({ initProfile }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (initProfile.length) {
      const isConfirmed = window.confirm(
        "Are you sure you want to create a new account? In this case, you will lose your current account"
      );
      if (isConfirmed) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="main-page">
      <div className="container main-page__container">
        <div className="main-page__info">
          <h3 className="main-page__title">Hello!</h3>
          <p className="main-page__text">
            kjndkwqd kjndk kjndk32323 kj kjndk kjndkwqd kjndk kjndk32323 kj
            kjndk
          </p>
        </div>
        <div className="main-page__links">
          <NavLink
            to={initProfile.length > 0 ? "/profile" : "/"}
            className={
              initProfile.length > 0
                ? "main-page__link btn"
                : "main-page__link btn disabled"
            }
            href="#"
          >
            Sign in
          </NavLink>
          <button
            className="main-page__link btn btn-reset"
            onClick={handleLoginClick}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
