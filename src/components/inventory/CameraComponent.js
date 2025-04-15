import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import { getProductInfo } from "../../api/getProductInfo";
import { Button } from "react-bootstrap";
import barcodeOverlay from "../../assets/barcode-306926.svg";

const CameraComponent = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");
  const [productInfo, setProductInfo] = useState(null);

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });
        if (ref.current) {
          ref.current.srcObject = stream;
        }
      } catch (err) {
        setError("Error accessing camera: " + err.message);
      }
    };
    getCameraStream();
    return () => {
      if (ref.current && ref.current.srcObject) {
        let tracks = ref.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [ref]);

  useEffect(() => {
    if (result && result !== "No barcode found") {
      const fetchProductInfo = async () => {
        try {
          setProductInfo(await getProductInfo(result));
        } catch (error) {
          setError("Product not found: " + error.message);
        }
      };
      fetchProductInfo();
    }
  }, [result]);

  return (
    <div>
      <div
        style={{
          position: "relative",
          // height: "60%",
          // maxWidth: "90%",
          margin: "auto",
        }}
      >
        <video
          id="videoScanner"
          ref={ref}
          autoPlay
          playsInline
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            border: "2px solid #FCF7F8",
            borderRadius: "8px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          <img
            src={barcodeOverlay}
            style={{
              objectPosition: "50% 50%",
              objectFit: "fill",
              opacity: 0.5,
              filter:
                "invert(91%) sepia(11%) saturate(5042%) hue-rotate(201deg) brightness(138%) contrast(98%)",
            }}
          />
        </div>
      </div>

      <p>
        <span>Last result:</span> <span>{result}</span>
        {productInfo && (
          <p style={{ fontSize: "12px", textAlign: "left" }}>
            {JSON.stringify(productInfo, null, 2)}
          </p>
        )}
      </p>
    </div>
  );
};

export default CameraComponent;
