import { useState } from "react";
import { useZxing } from "react-zxing";

export const BarcodeScanner = () => {
  const [result, setResult] = useState("No barcode found");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} playsInline />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};
