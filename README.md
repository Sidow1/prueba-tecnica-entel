## Solicitud N°1:

# Pasos para iniciar el proyecto

1. Clonar repositorio.
2. Dirigirse a la carpeta donde se encuentra el proyecto.
3. realizar un `npm install o npm i`.
4. correr el comando `npm run dev` y dirigirse a la dirección que indica.

# Notas

- Se hizo validación de los campos del formulario. Asumí que un mismo vendedor puede vender varios autos por esto el Rut no es único.
- Se asumió que un auto no puede estar siendo vendido dos o más veces, por lo que la key única en este caso es la patente del auto (o id como se manejó).
- Se hizo uso de la libreria SweetAlert (https://sweetalert2.github.io/#download) para mejorar la experiencia de usuario y darle un mejor feedback.
- Se creó data de prueba o mockData (src/mockData.ts) para agilizar la visualización de datos en la lista. El form permite agregar nuevos vendedores también.
- Se hizo un deploy en Netlify (https://prueba-tecnica-entel.netlify.app) para que la revisión sea más rápida (se eliminará una vez dado el feedback de la prueba).
