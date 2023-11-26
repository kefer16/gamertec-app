export const personalizarMensajeError = (error: any): any => {
   if (error.response.data.error.isValidate) {
      error.message = "[warn]" + error.response.data.error.message;
   } else {
      error.message = error.response.data.error.message;
   }
   return error.message;
};
