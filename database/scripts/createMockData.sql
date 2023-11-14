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