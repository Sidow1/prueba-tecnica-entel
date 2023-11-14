-- Scripts generales para levantar la base de datos, crear las tablas, hacer la inserción de datos de prueba y crear los procedimientos almacenados

-- Script para levantar la base de datos
DROP DATABASE IF EXISTS TiendaAutos;
CREATE DATABASE TiendaAutos;
USE TiendaAutos;

-- Script para crear las tablas
CREATE TABLE [Vendedor] (
  [sellerId] INT PRIMARY KEY IDENTITY(1, 1),
  [name] NVARCHAR(255) NOT NULL,
  [createdAt] DATETIME,
  [updatedAt] DATETIME
);
GO

CREATE TABLE [MarcaAuto] (
  [brandId] INT PRIMARY KEY IDENTITY(1, 1),
  [name] NVARCHAR(255) NOT NULL,
  [createdAt] DATETIME,
  [updatedAt] DATETIME
);
GO

CREATE TABLE [ModeloAuto] (
  [modelId] INT PRIMARY KEY IDENTITY(1, 1),
  [name] NVARCHAR(255) NOT NULL,
  [brandId] INT,
  [createdAt] DATETIME,
  [updatedAt] DATETIME
);
GO

CREATE TABLE [Solicitudes] (
  [id] INT PRIMARY KEY IDENTITY(1, 1),
  [sellerId] INT,
  [modelId] INT,
  [sellAmount] DECIMAL NOT NULL,
  [createdAt] DATETIME,
  [updatedAt] DATETIME
);
GO

ALTER TABLE [ModeloAuto] ADD FOREIGN KEY ([brandId]) REFERENCES [MarcaAuto] ([brandId]);
GO

ALTER TABLE [Solicitudes] ADD FOREIGN KEY ([sellerId]) REFERENCES [Vendedor] ([sellerId]);
GO

ALTER TABLE [Solicitudes] ADD FOREIGN KEY ([modelId]) REFERENCES [ModeloAuto] ([modelId]);
GO

-- Script para insertar datos de prueba
INSERT INTO dbo.Vendedor (name, createdAt, updatedAt) VALUES ('Juan Perez', GETDATE(), GETDATE())
INSERT INTO dbo.Vendedor (name, createdAt, updatedAt) VALUES ('John Doe', GETDATE(), GETDATE())
INSERT INTO dbo.Vendedor (name, createdAt, updatedAt) VALUES ('Alex Smith', GETDATE(), GETDATE())
INSERT INTO dbo.Vendedor (name, createdAt, updatedAt) VALUES ('John Smith', GETDATE(), GETDATE())
INSERT INTO dbo.Vendedor (name, createdAt, updatedAt) VALUES ('Jane Smith', GETDATE(), GETDATE())

INSERT INTO dbo.MarcaAuto (name, createdAt, updatedAt) VALUES ('Ford', GETDATE(), GETDATE()) 
INSERT INTO dbo.MarcaAuto (name, createdAt, updatedAt) VALUES ('Tesla', GETDATE(), GETDATE())
INSERT INTO dbo.MarcaAuto (name, createdAt, updatedAt) VALUES ('Fiat', GETDATE(), GETDATE())
INSERT INTO dbo.MarcaAuto (name, createdAt, updatedAt) VALUES ('Audi', GETDATE(), GETDATE())
INSERT INTO dbo.MarcaAuto (name, createdAt, updatedAt) VALUES ('BMW', GETDATE(), GETDATE())

INSERT INTO dbo.ModeloAuto(name, brandId, createdAt, updatedAt) VALUES ('Fiesta', 1 , GETDATE(), GETDATE())
INSERT INTO dbo.ModeloAuto(name, brandId, createdAt, updatedAt) VALUES ('Model S', 2 , GETDATE(), GETDATE())
INSERT INTO dbo.ModeloAuto(name, brandId, createdAt, updatedAt) VALUES ('Freemont', 3 , GETDATE(), GETDATE())
INSERT INTO dbo.ModeloAuto(name, brandId, createdAt, updatedAt) VALUES ('A4', 4 , GETDATE(), GETDATE())
INSERT INTO dbo.ModeloAuto(name, brandId, createdAt, updatedAt) VALUES ('A6', 4 , GETDATE(), GETDATE())

INSERT INTO dbo.Solicitudes(sellerId, modelId, sellAmount, createdAt, updatedAt) VALUES (2, 1, 50000.00, '2023-11-14 18:16:03.997', GETDATE())
INSERT INTO dbo.Solicitudes(sellerId, modelId, sellAmount, createdAt, updatedAt) VALUES (2, 2, 100000.00, '2023-10-14 18:16:03.997', GETDATE())
INSERT INTO dbo.Solicitudes(sellerId, modelId, sellAmount, createdAt, updatedAt) VALUES (4, 3, 70000.00, '2023-09-14 18:16:03.997', GETDATE())
INSERT INTO dbo.Solicitudes(sellerId, modelId, sellAmount, createdAt, updatedAt) VALUES (3, 3, 70000.00, '2022-12-14 18:16:03.997', GETDATE())
INSERT INTO dbo.Solicitudes(sellerId, modelId, sellAmount, createdAt, updatedAt) VALUES (2, 3, 90000.00, '2022-12-14 18:16:03.997', GETDATE())
INSERT INTO dbo.Solicitudes(sellerId, modelId, sellAmount, createdAt, updatedAt) VALUES (2, 3, 45000.00, '2023-11-14 18:16:03.997', GETDATE())
INSERT INTO dbo.Solicitudes(sellerId, modelId, sellAmount, createdAt, updatedAt) VALUES (3, 2, 74000.00, '2023-11-14 18:16:03.997', GETDATE())


-- Scripts para crear los procedimientos almacenados

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