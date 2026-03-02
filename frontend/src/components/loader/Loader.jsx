import { FaBuilding, FaUser, FaUtensils } from "react-icons/fa";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="icon-row">
        <div className="icon building">
          <FaBuilding />
        </div>
        <div className="icon user">
          <FaUser />
        </div>
        <div className="icon food">
          <FaUtensils />
        </div>
      </div>

      <p className="loader-text">Setting up your hostel experience...</p>
    </div>
  );
};

export default Loader;