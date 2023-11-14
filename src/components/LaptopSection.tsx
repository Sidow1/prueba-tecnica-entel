import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: -20px 350px;
  gap: 100px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Title = styled.p`
  font-family: "Barlow-Regular", Helvetica;
  font-style: normal;
  color: #002eff;
  font-size: 52px;
  font-weight: 600;
  line-height: 67.2px;
  width: 524px;
  top: 250px;
  left: 165px;

  &::before {
    content: "Formulario ";
    font-weight: normal;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28.8px;
    width: 134px;
    height: 55px;
    top: 127px;
    left: 35px;
    margin-left: 35px;
    margin-bottom: 50px;
  }
`;

const ImageContainer = styled.img`
  width: 424px;
  height: 424px;
  top: 90px;
  left: 851px;
  padding: 16px;

  @media (max-width: 768px) {
    width: 168px;
    height: 168px;
    top: 92px;
    left: 195px;
    padding: 12px;
  }
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
