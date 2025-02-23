import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import { GetProductInfo } from "../api/GetProductInfo";

const CameraComponent = () => {
  const [error, setError] = useState(null);
  // 758176233967 for barcode that's not found
  // 080000521484 for barcode that's found
  const [result, setResult] = useState("758176233967");

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  // CAMERA SCANNER
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

  // BARCODE API
  useEffect(() => {
    if (result && result !== "No barcode found") {
      const fetchProductInfo = async () => {
        try {
          const productInfo = await GetProductInfo(result);
          console.log(`productInfo: ${JSON.stringify(productInfo)}`);
        } catch (error) {
          setError("Product not found: " + error.message);
        }
      };
      fetchProductInfo();
    }
  }, [result]);
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <video id="videoScanner" ref={ref} autoPlay playsInline />
      )}
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </div>
  );
};

export default CameraComponent;
