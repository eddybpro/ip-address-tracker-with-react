import "./Header.css";
import PropTypes from "prop-types";

function Header({ data }) {
  return (
    <div className="HeaderBox">
      <div>
        <p className="HeaderBox-Title">ip address</p>
        <p className="HeaderBox-Value">{data.ip}</p>
      </div>
      <div>
        <p className="HeaderBox-Title">location</p>
        <p className="HeaderBox-Value">
          {data.city},{data.country_code}
        </p>
      </div>
      <div>
        <p className="HeaderBox-Title">timezone</p>
        <p className="HeaderBox-Value">{data.timezone}</p>
      </div>
      <div>
        <p className="HeaderBox-Title">isp</p>
        <p className="HeaderBox-Value">{data.org}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
