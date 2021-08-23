import React, { useEffect, useState } from "react";
import "@google/model-viewer";
import "./movel-viewer.css";

const HEIGHT = "400px";
const WIDTH = "400px";

const ModelViewer = ({ slug, height = HEIGHT, width = WIDTH, autoRotate }) => {
  const [source, setSource] = useState("");

  useEffect(() => {
    fetch(
      ` https://trhutwsr8i.execute-api.eu-north-1.amazonaws.com/karl/modelSource/v1/${slug}`,
      { method: "get" }
    )
      .then((data) => data.json())
      .then(({ models }) => {
        if (models) {
          setSource(
            `https://model-catalogue-bucket-karl.s3.eu-north-1.amazonaws.com/${models.source}`
          );
        } else {
          setSource(`${this.getAttribute("source")}`);
        }
      });
  }, [slug]);

  return (
    <div style={{ height, width }}>
      <model-viewer
        style={{
          height: "100%",
          width: "100%",
          "--poster-color": "transparent",
          "--progress-mask": "transparent",
        }}
        exposure="1"
        environment-image="https://model-catalogue-bucket-karl.s3.eu-north-1.amazonaws.com/HDRI_v11.hdr"
        src={source}
        data-js-focus-visible
        alt="A 3D model"
        camera-controls
        auto-rotate={autoRotate ? true : null}
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
