import React, { useEffect } from "react";
import "@google/model-viewer";
import posterAstronaut from "./poster-astronaut.png";
import "./movel-viewer.css";

const TEST_SLUG = "test-model-for-component-docs-3";
const HEIGHT = "40px";
const WIDTH = "100px";
const DEFAULT_IMG = posterAstronaut;

const ModelViewerAR = ({
  slug = TEST_SLUG,
  height = HEIGHT,
  width = WIDTH,
  img = DEFAULT_IMG,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://fibblar-component-scripts.s3.eu-north-1.amazonaws.com/fibblar-component-ARonly.js";
    script.async = true;
    script.id = "fibblar-script";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ height, width }}>
      <fibblar-component-ar slug={slug}>
        <button slot="ar-button" className="ar-placement-button">
          See In AR
        </button>
      </fibblar-component-ar>
    </div>
  );
};

export default ModelViewerAR;
