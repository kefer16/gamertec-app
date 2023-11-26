export const personalizarMensajeError = (error: any): any => {
   console.log(String(error));

   if (error.response.data.error.isValidate) {
      error.message = "[warn]" + error.response.data.error.message;
   } else {
      error.message = error.response.data.error.message;
   }
   return error.message;
};
