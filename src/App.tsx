import React, { useEffect } from "react";
import { DivMap } from "./div-map";
import { SdkMap } from "./sdk-map";

declare global {
  interface Window {
    kakao: any;
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <DivMap />
      <SdkMap />
    </div>
  );
};

export default App;
