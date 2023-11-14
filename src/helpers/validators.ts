import Swal from "sweetalert2";
import { Seller } from "../interfaces";

export const validateRutFormat = (rut: string): boolean => {
  const rutPattern = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
  const isValidRut = rutPattern.test(rut);

  if (!isValidRut) {
    Swal.fire({
      title: "Error, formato del RUT incorrecto",
      text: "Debe ser de la forma '12.345.678-9' o '1.234.567-8' o terminación en k.",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return false;
  }

  return true;
};

export const validateVehicleIdUnique = (
  vehicleId: string,
  vehiclesInfo: Seller[]
): boolean => {
  const existingVehicleIds = vehiclesInfo.map((seller) => seller.vehicle.id);
  const isUnique = !existingVehicleIds.includes(vehicleId);

  if (!isUnique) {
    Swal.fire({
      title: "Error. Patente del vehículo duplicado",
      text: "Ya existe un vehiculo con esta patente en la base de datos.",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return false;
  }

  return true;
};
