import { IIcon } from "./type";

export const Code: React.FunctionComponent<IIcon> = ({
  color = "currentColor",
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${size}`}
    height={`${size}`}
    viewBox="0 0 24 24"
    style={{
      minWidth: "20px",
      minHeight: "20px",
    }}
  >
    <path
      fill="none"
      stroke={`${color}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.75 6.5L3.25 12l5.5 5.5m6.5-11l5.5 5.5l-5.5 5.5"
    />
  </svg>
);
