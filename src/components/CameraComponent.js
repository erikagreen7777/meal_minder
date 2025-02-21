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

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code only runs on the client

    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // Use environment camera
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

/* API TO USE
https://www.postman.com/cs-demo/public-rest-apis/request/zgtahxr/barcode-lookup
https://openfoodfacts.github.io/openfoodfacts-server/api/

*/
