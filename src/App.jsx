import "./App.css";
import ArrowIcon from "./assets/icon-arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Map from "./components/Map";
import "leaflet/dist/leaflet.css";

function App() {
  const [data, setData] = useState([]);
  const [ipAddress, setIpAddress] = useState("");

  const fetchData = () => {
    try {
      axios
        .get(`https://ipapi.co/${ipAddress}/json/`)
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData;
  }, []);

  const handleClick = () => {
    fetchData();
    console.log(data);
  };

  return (
    <main>
      <div className="Header">
        <h1 className="Header-Title">IP Address Tracker</h1>
        <div className="Header-Input">
          <input
            type="text"
            name="ip"
            id="ip"
            onChange={(e) => setIpAddress(e.target.value)}
            aria-label="ip address"
            placeholder="Search for any IP address or domain"
          />
          <button aria-label="search ip" onClick={handleClick}>
            <img src={ArrowIcon} alt="" />
          </button>
        </div>
      </div>
      {data.data && <Header data={data.data} />}
      <div className="Map">
        {data.data && (
          <Map lat={data.data.latitude} long={data.data.longitude} />
        )}
      </div>
    </main>
  );
}

export default App;
