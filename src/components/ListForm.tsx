import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Swal from "sweetalert2";

import { RootState } from "../store/store";
import { getSellers, deleteSeller } from "../store/seller/sellerSlice";

const ListContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 105px;
  width: 1000px;
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

  th,
  td {
    text-align: center;
    padding: 16px;
  }

  th:first-child,
  td:first-child {
    width: 240px;
  }

  // access to the second child
  th:nth-child(2),
  td:nth-child(2) {
    width: 100px;
  }
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ListForm = () => {
  const dispatch = useDispatch();
  const sellersInfo = useSelector((state: RootState) => state.seller);

  useEffect(() => {
    dispatch(getSellers());
  }, [dispatch]);

  const deleteSellerFromStore = (vehicleId: string) => {
    Swal.fire({
      title: "¿Está seguro de eliminarlo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Eliminado!",
          "El vendedor ha sido eliminado de la base de datos.",
          "success"
        );
        dispatch(deleteSeller(vehicleId));
      }
    });
  };

  // Tomamos los 10 vendedores de la lista y los invertimos para mostrar los últimos ingresados
  const lastTenSellers = sellersInfo.slice(-10).reverse();

  // Si simplemente se quieren mostrar 10 registros pero no en orden de más reciente a más antiguo, tomariamos lo siguiente
  // const lastTenSellers = sellersInfo.slice(-10);
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
            <th>Precio vehiculo</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {lastTenSellers.map((seller) => (
            <tr key={seller.vehicle.id}>
              <td>{seller.name}</td>
              <td>{seller.rut}</td>
              <td>{seller.vehicle.id}</td>
              <td>{seller.vehicle.brand}</td>
              <td>{seller.vehicle.model}</td>
              <td>${seller.vehicle.price}</td>
              <td>
                <DeleteButton
                  onClick={() => deleteSellerFromStore(seller.vehicle.id)}
                >
                  <img src="/deleteIcon.svg" alt="deleteIcon" />
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <footer>
        Mostrando registros {lastTenSellers.length >= 1 ? 1 : 0} al{" "}
        {lastTenSellers.length} de un total de {sellersInfo.length} registros.
      </footer>
    </ListContainer>
  );
};
