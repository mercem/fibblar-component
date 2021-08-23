import React, { useEffect, useState } from "react";
import "@google/model-viewer";
import "./movel-viewer.css";

const TEST_SLUG = "test-model-for-component-docs-3";
const HEIGHT = "40px";
const WIDTH = "100px";

const ModelViewerAR = ({
  slug = TEST_SLUG,
  height = HEIGHT,
  width = WIDTH,
  children,
}) => {
  const [source, setSource] = useState("");
  const [iosSource, setIosSource] = useState("");

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
          setIosSource(
            `https://model-catalogue-bucket-karl.s3.eu-north-1.amazonaws.com/${models.iosSource}`
          );
        } else {
          setSource(`${this.getAttribute("source")}`);
          setIosSource(`${this.getAttribute("iosSource")}`);
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
        reveal="manual"
        ar
        ar-modes="webxr scene-viewer quick-look"
        exposure="1"
        environment-image="https://model-catalogue-bucket-karl.s3.eu-north-1.amazonaws.com/HDRI_v11.hdr"
        src={source}
        ios-src={iosSource}
        data-js-focus-visible
        alt="A 3D model"
        camera-controls
      >
        {children}
      </model-viewer>
    </div>
  );
};

export default ModelViewerAR;
