import styled from "styled-components";

const Line = styled.hr`
  position: absolute;
  width: 100%;
  height: 2px;
  top: 423px;
  left: 0;
  background-color: #cccccc;
  z-index: 999;
`;

export const Separator = () => {
  return <Line />;
};
