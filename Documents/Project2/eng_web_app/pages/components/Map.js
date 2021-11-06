import { useEffect } from "react";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3J1eGlmaXh1ciIsImEiOiJja3MwaTF3dnAwYWE2MndwZTdyYTk3MjduIn0.MtG_HqT6LlC9o12xHj9W-A";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 3,
    });
  });

  return <div id="map" className="flex-1"></div>;
};

export default Map;
