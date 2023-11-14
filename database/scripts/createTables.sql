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
