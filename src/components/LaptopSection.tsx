import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: -20px 165px 0px 250px;
  gap: 100px;
`;

const Title = styled.p`
  font-family: "Barlow";
  font-style: normal;
  color: #002eff;
  font-size: 56px;
  font-weight: 600;
  line-height: 67.2px;
  width: 524px;
  top: 234px;
  left: 165px;

  &::before {
    content: "Formulario ";
    font-weight: normal;
  }

  span {
    font-weight: bold;
  }
`;

const ImageContainer = styled.img`
  width: 424px;
  height: 424px;
  top: 90px;
  left: 851px;
  padding: 16px;
`;

export const LaptopSection = () => {
  return (
    <Container>
      <Title>
        <span>de Prueba</span>
      </Title>
      <ImageContainer src="laptop.png" alt="Laptop" />
    </Container>
  );
};
