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
          {data.city},{data.region_code}
        </p>
      </div>
      <div>
        <p className="HeaderBox-Title">country</p>
        <p className="HeaderBox-Value">{data.country_name}</p>
      </div>
      <div>
        <p className="HeaderBox-Title">capital</p>
        <p className="HeaderBox-Value">{data.location.capital}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
