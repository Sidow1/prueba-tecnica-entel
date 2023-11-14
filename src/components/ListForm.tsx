import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";
import { getSellers } from "../store/seller/sellerSlice";
import { useEffect } from "react";
const ListContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 105px;
  width: 825px;
  margin-left: auto;
  margin-right: auto;

  b {
    text-align: start;
    font-size: 30px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0;
    color: #191919;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    color: #191919;
  }

  footer {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  align-items: center;

  tr {
    border-bottom: 1px solid #ccc;
  }
`;

export const ListForm = () => {
  const dispatch = useDispatch();
  const sellersInfo = useSelector((state: RootState) => state.seller);

  useEffect(() => {
    // Dispatch the action to get sellers when the component mounts
    dispatch(getSellers());
  }, [dispatch]);
  return (
    <ListContainer>
      <b>Lista formulario</b>
      <p>
        Et aliqua minim excepteur ipsum deserunt commodo sunt aliquip ipsum.Elit
        exercitation commodo do nisi non et.
      </p>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rut vendedor</th>
            <th>Patente vehiculo</th>
            <th>Marca vehiculo</th>
            <th>Modelo vehiculo</th>
            <th>Color vehiculo</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {sellersInfo.map((seller, index) => (
            <tr key={index}>
              <td>{seller.name}</td>
              <td>{seller.rut}</td>
              <td>{seller.vehicle.id}</td>
              <td>{seller.vehicle.brand}</td>
              <td>{seller.vehicle.model}</td>
              <td>{seller.vehicle.price}</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <footer>Mostrando registros 1 al 10 de un total de 10 registros.</footer>
    </ListContainer>
  );
};
