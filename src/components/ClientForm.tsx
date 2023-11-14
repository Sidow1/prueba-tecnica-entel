import styled from "styled-components";

const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 825px;
  height: 561px
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;

  b {
    font-size: 30px;
    margin-top: 8px
    margin-bottom: 8px;
    display: block;
  }

  p {
    margin-bottom: 60px;
  }
`;

const SellerInputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 255px;
  margin-bottom: 16px;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VehicleInputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 16px;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #002eff;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 8px;
  margin-bottom: 8px;
  outline: none;
  transition: border-color 0.3s; /* Agrega una transición suave al cambio de color del borde */

  &:hover,
  &:focus {
    border-color: #1976d2;
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  font-style: normal;
  color: white;
  background-color: #002eff;
  width: 120px;
  height: 40px;
  border-radius: 100px;
  padding: 12px 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: #1976d2;
  }

  @media (max-width: 768px) {
    margin-right: auto;
  }
`;

export const ClientForm = () => {
  return (
    <FormContainer>
      <form action="submit">
        <b>Nuevo formulario</b>
        <p>
          Et aliqua minim excepteur ipsum deserunt commodo sunt aliquip
          ipsum.Elit exercitation commodo do nisi non et.Nulla laborum non minim
          deserunt cupidatat tempor nulla excepteur aliqua mollit quis commodo.
        </p>
        <b>Datos del vendedor:</b>
        <SellerInputsContainer>
          <Input id="sellerName" placeholder="Nombre completo" />
          <Input id="sellerRut" placeholder="Rut vendedor" />
        </SellerInputsContainer>
        <hr />
        <b>Datos del vehiculo:</b>
        <VehicleInputsContainer>
          <Input id="vehicleId" placeholder="Patente del vehiculo" />
          <Input id="vehicleBrand" placeholder="Marca del vehiculo" />
          <Input id="vehicleModel" placeholder="Modelo del vehiculo" />
          <Input id="vehiclePrice" placeholder="Precio del vehiculo" />
        </VehicleInputsContainer>
        <hr />
        <SendButton>Enviar</SendButton>
      </form>
    </FormContainer>
  );
};
