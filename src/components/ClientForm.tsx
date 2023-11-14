import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { Brand, Seller } from "../interfaces";
import { RootState } from "../store/store";
import { addSeller } from "../store/seller/sellerSlice";

const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 123px;
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

  span {
    font-size: 20px;
    margin-top: 8px
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
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

const Select = styled.select`
  padding: 8px;
  border: 1px solid #002eff;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 8px;
  margin-bottom: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:hover,
  &:focus {
    border-color: #1976d2;
  }
`;

export const ClientForm = () => {
  const dispatch = useDispatch();
  const brandModels = useSelector(
    (state: RootState) => state.vehiculesInfo.brandModels
  );
  const brands = useSelector((state: RootState) => state.vehiculesInfo.brands);

  const [selectedBrand, setSelectedBrand] = useState<Brand>(brands[0]);
  const selectedBrandModels = brandModels[selectedBrand] || [];
  const [selectedModel, setSelectedModel] = useState<string>(
    selectedBrandModels[0] || ""
  );

  const [formData, setFormData] = useState({
    name: "",
    rut: "",
    vehicleId: "",
    vehicleBrand: selectedBrand,
    vehicleModel: selectedModel,
    vehiclePrice: "",
  });

  // const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedBrand(event.target.value as Brand);
  // };

  // const handleBrandModelChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const selectedModel = event.target.value;
  //   setSelectedModel(selectedModel);
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newSeller = {
      name: formData.name,
      rut: formData.rut,
      vehicle: {
        id: formData.vehicleId,
        brand: formData.vehicleBrand,
        model: formData.vehicleModel,
        price: Number(formData.vehiclePrice),
      },
    };

    console.log(newSeller);

    dispatch(addSeller(newSeller as unknown as Seller));
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    fieldName: string
  ) => {
    const value = event.target.value;
    if (fieldName === "vehicleBrand") {
      setSelectedBrand(value as Brand);
      setSelectedModel(selectedBrandModels[0] || "");
    } else {
      setSelectedModel(value);
    }
    onInputChange(event, fieldName);
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    setFormData({ ...formData, [fieldName]: event.target.value });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <b>Nuevo formulario</b>
        <p>
          Et aliqua minim excepteur ipsum deserunt commodo sunt aliquip
          ipsum.Elit exercitation commodo do nisi non et.Nulla laborum non minim
          deserunt cupidatat tempor nulla excepteur aliqua mollit quis commodo.
        </p>
        <span>Datos del vendedor:</span>
        <SellerInputsContainer>
          <Input
            id="sellerName"
            placeholder="Nombre completo"
            required
            value={formData.name}
            onChange={(e) => onInputChange(e, "name")}
          />
          <Input
            id="sellerRut"
            placeholder="Rut vendedor"
            required
            value={formData.rut}
            onChange={(e) => onInputChange(e, "rut")}
          />
        </SellerInputsContainer>
        <hr />
        <span>Datos del vehiculo:</span>
        <VehicleInputsContainer>
          <Input
            id="vehicleId"
            placeholder="Patente del vehiculo"
            required
            value={formData.vehicleId}
            onChange={(e) => onInputChange(e, "vehicleId")}
          />
          {/* <Input id="vehicleBrand" placeholder="Marca del vehiculo" required /> */}
          <Select
            id="vehicleBrand"
            onChange={(e) => handleSelectChange(e, "vehicleBrand")}
            value={selectedBrand}
            required
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
          {/* <Input id="vehicleModel" placeholder="Modelo del vehiculo" required /> */}
          <Select
            id="vehiculeModel"
            value={selectedModel}
            onChange={(e) => handleSelectChange(e, "vehicleModel")}
            required
          >
            {selectedBrandModels.map((brandModel) => (
              <option key={brandModel} value={brandModel}>
                {brandModel}
              </option>
            ))}
          </Select>
          <Input
            id="vehiclePrice"
            placeholder="Precio del vehiculo"
            required
            value={formData.vehiclePrice}
            onChange={(e) => onInputChange(e, "vehiclePrice")}
          />
        </VehicleInputsContainer>
        <hr />
        <SendButton>Enviar</SendButton>
      </form>
    </FormContainer>
  );
};
