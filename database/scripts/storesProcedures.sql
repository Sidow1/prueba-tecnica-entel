-- Obtener las 3 marcas más solicitadas, y la cantidad de solicitudes de cada una, ordenadas descendientemente
CREATE PROCEDURE ObtenerMarcasMasSolicitadas
AS
BEGIN
    SELECT TOP 3 m.name AS Marca, COUNT(s.id) AS CantidadSolicitudes
    FROM MarcaAuto m
    JOIN ModeloAuto mo ON m.brandId = mo.brandId
    LEFT JOIN Solicitudes s ON mo.modelId = s.modelId
    GROUP BY m.name
    ORDER BY CantidadSolicitudes DESC;
END;

-- Obtener solicitudes del mes actual
CREATE PROCEDURE ObtenerSolicitudesMesActual
AS
BEGIN
    DECLARE @FechaActual DATE = GETDATE();
    SELECT *
    FROM Solicitudes
    WHERE MONTH(createdAt) = MONTH(@FechaActual) AND YEAR(createdAt) = YEAR(@FechaActual);
END;

-- Obtener el vendedor que menos solicitudes haya generado en los últimos 30 días
CREATE PROCEDURE ObtenerVendedorMenosSolicitudes
AS
BEGIN
    DECLARE @FechaHace30Dias DATE = DATEADD(DAY, -30, GETDATE());
    SELECT TOP 1
        V.name AS Vendedor,
        COUNT(S.id) AS CantidadSolicitudes
    FROM
        Vendedor V
    LEFT JOIN Solicitudes S ON V.sellerId = S.sellerId
    WHERE
        S.createdAt >= @FechaHace30Dias
    GROUP BY
        V.name
    ORDER BY
        CantidadSolicitudes ASC;
END;

-- Obtener modelos que no tengan solicitudes
CREATE PROCEDURE ObtenerModelosSinSolicitudes
AS
BEGIN
    SELECT
        MA.name AS Modelo
    FROM
        ModeloAuto MA
    LEFT JOIN Solicitudes S ON MA.modelId = S.modelId
    WHERE
        S.id IS NULL;
END;

-- Obtener 3 meses con más dinero en ventas
CREATE PROCEDURE ObtenerMesesConMasVentas
AS
BEGIN
    SELECT TOP 3
        MONTH(S.createdAt) AS Mes,
        YEAR(S.createdAt) AS Anio,
        SUM(S.sellAmount) AS MontoVentas
    FROM
        Solicitudes S
    GROUP BY
        MONTH(S.createdAt),
        YEAR(S.createdAt)
    ORDER BY
        MontoVentas DESC;
END;