import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(
        37.558090961074825,
        126.99847210567884
      ),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);
  return (
    <div className="App">
      <div id="map" style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
};

export default App;
