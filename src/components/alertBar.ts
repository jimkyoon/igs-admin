import styled from "@emotion/styled";

interface AlertBarProps {
  isError: boolean;
}

const AlertBar = styled.div<AlertBarProps>`
  position: fixed;
  z-index: 99;
  width: 100%;
  bottom: 0;
  background: ${(props) => (props.isError ? "red" : "green")};
  text-align: center;
  color: white;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`;

export default AlertBar;
