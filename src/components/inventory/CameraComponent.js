import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import { getProductInfo } from "../../api/getProductInfo";
import { AddButton } from "../buttons/AddButton";

const CameraComponent = () => {
  const [error, setError] = useState(null);
  // 758176233967 for barcode that's not found
  // 080000521484 for barcode that's found
  const [result, setResult] = useState("080000521484");
  const [productInfo, setProductInfo] = useState(1);

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
      {error ? (
        <div>
          <p>{error}</p>
          <AddButton />
        </div>
      ) : (
        <video id="videoScanner" ref={ref} autoPlay playsInline />
      )}

      <p>
        <span>Last result:</span>
        <span>{result}</span>
        {productInfo && (
          <p style={{ fontSize: "12px", alignItems: "left" }}>
            {JSON.stringify(productInfo, null, 2)}
          </p>
        )}
      </p>
    </div>
  );
};

export default CameraComponent;
