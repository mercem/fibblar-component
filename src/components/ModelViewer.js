import React, { useEffect } from "react";
import "@google/model-viewer";
import "./movel-viewer.css";

const HEIGHT = "400px";
const WIDTH = "400px";

const ModelViewer = ({ slug, height = HEIGHT, width = WIDTH, children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://fibblar-component-scripts.s3.eu-north-1.amazonaws.com/fibblar-component.js";
    script.async = true;
    script.id = "fibblar-script";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ height, width }}>
      <fibblar-component slug={slug}>{children}</fibblar-component>
    </div>
  );
};

export default ModelViewer;
