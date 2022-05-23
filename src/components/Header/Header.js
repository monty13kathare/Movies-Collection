import "./Header.css";
import logo from "../Header/Ak_logo.jpeg"

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
    <img src={logo} alt="" className="logo" />
      🎬 Movies Collection 🎥
    </span>
  );
};

export default Header;
