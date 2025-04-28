export function Info(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1.5em"
      height="1.5em"
      style={{ marginLeft: ".25em" }}
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <path strokeLinecap="round" d="M12 7h.01"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 11h2v5m-2 0h4"
        ></path>
      </g>
    </svg>
  );
}

// https://icons.getbootstrap.com/icons/info-circle/
