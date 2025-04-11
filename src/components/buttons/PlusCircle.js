export default function PlusCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1.75em"
      height="1.75em"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </g>
    </svg>
  );
}

// Akar Icons Collection: https://reactsvgicons.com/akar-icons
