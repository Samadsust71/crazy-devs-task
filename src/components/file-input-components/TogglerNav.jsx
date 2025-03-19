import logo from "../../assets/logo.svg";
import RightSidebarIcon from "../svg-components/RightSidebarIcon";
import Search from "../svg-components/Search";

const TogglerNav = () => {
  return (
    <div className="flex items-center gap-5 absolute left-5 top-3">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-3">
        <Search />
        <RightSidebarIcon />
      </div>
    </div>
  );
};

export default TogglerNav;
