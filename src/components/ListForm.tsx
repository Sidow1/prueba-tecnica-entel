import styled from "styled-components";
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
      </Table>

      <footer>Mostrando registros 1 al 10 de un total de 10 registros.</footer>
    </ListContainer>
  );
};
