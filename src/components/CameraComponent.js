import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";

const CameraComponent = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState("No barcode found");
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
      // make API call
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://world.openfoodfacts.net/api/v2/product/${result}?product_type=food&fields=product_name%2Cnutriments`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ barcode: result }),
            }
          );
          const data = await response.json();
          const { ...product_info } = data;
          console.log(`product_info: ${JSON.stringify(product_info)}`);
        } catch (error) {
          alert("Error fetching data:", error.message);
        }
      };

      fetchData();
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
