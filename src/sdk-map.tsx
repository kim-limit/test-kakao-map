import { Map, MapMarker } from "react-kakao-maps-sdk";

export const SdkMap = () => {
  return (
    <Map
      center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
      style={{ width: "500px", height: "500px" }}
    >
      <MapMarker
        position={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
      >
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};
