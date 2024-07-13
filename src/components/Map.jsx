import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get data from query string
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // Update query string
  function setParams() {
    setSearchParams({
      lat: 23,
      lng: 50,
    });
  }

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        position : {lat},{lng}
      </h1>
      <button onClick={() => setParams()}>Change pos</button>
    </div>
  );
}

export default Map;
