import React, { useEffect, useState } from "react";
import "@google/model-viewer";
import "./movel-viewer.css";

const HEIGHT = "400px";
const WIDTH = "400px";

const ModelViewer = ({
  slug,
  height = HEIGHT,
  width = WIDTH,
  children,
  onlyAR,
  ar,
  autoRotate,
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
      {source ? (
        <model-viewer
          style={{
            height: "100%",
            width: "100%",
            "--poster-color": "transparent",
            "--progress-mask": "transparent",
          }}
          reveal={onlyAR ? "manual" : "auto"}
          ar={ar || onlyAR}
          ar-modes={
            ar || onlyAR
              ? "webxr scene-viewer quick-look"
              : "webxr scene-viewer"
          }
          exposure="1"
          environment-image="https://model-catalogue-bucket-karl.s3.eu-north-1.amazonaws.com/HDRI_v11.hdr"
          src={source}
          ios-src={iosSource}
          data-js-focus-visible
          alt="A 3D model"
          auto-rotate={autoRotate ? true : null}
          camera-controls
        >
          {children}
        </model-viewer>
      ) : null}
    </div>
  );
};

export default ModelViewer;
