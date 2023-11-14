import styled from "styled-components";

const Line = styled.hr`
  position: absolute;
  width: 99%;
  height: 2px;
  top: 423px;
  left: 0;
  background-color: #cccccc;
  z-index: 999;

  @media (max-width: 768px) {
    top: 235px;
    height: 1px;
  }
`;

export const Separator = () => {
  return <Line />;
};
