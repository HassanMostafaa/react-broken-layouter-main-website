import { IIcon } from "./type";

export const Customiazable: React.FunctionComponent<IIcon> = ({
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
      d="M4 11q-.425 0-.712-.288T3 10V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v6q0 .425-.288.713T10 11zm1-6v4zm9 6q-.425 0-.712-.288T13 10V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11zm1-6v4zM4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13h6q.425 0 .713.288T11 14v6q0 .425-.288.713T10 21zm1-6v4zm12 6q-.425 0-.712-.288T16 20v-2h-2.025q-.425 0-.7-.288T13 17t.288-.712T14 16h2v-2.025q0-.425.288-.7T17 13t.713.288T18 14v2h2.025q.425 0 .7.288T21 17t-.288.713T20 18h-2v2.025q0 .425-.288.7T17 21M15 5v4h4V5zM5 5v4h4V5zm0 10v4h4v-4z"
    />
  </svg>
);
