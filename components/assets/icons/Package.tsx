import { IIcon } from "./type";

export const Package: React.FunctionComponent<IIcon> = ({
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
      fill={`${color}`}
      d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.75 1.75 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.75 1.75 0 0 1 1.75 0m-1 1.298L4.251 6.34l7.75 4.474l7.75-4.474l-7.625-4.402a.25.25 0 0 0-.25 0m.875 19.123l7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"
    />
  </svg>
);
