# Gamertec - FrontEnd APP

Aplicación Móvil de tienda online, Gamertec

## Previsualización

previsualización de `despliegue utilizando Expo y Emulador de Android Studio`

- Pantalla Login

![Imagen despliegue Principal](./assets/images/readme/login-app.png)

## Generar carpeta android

para poder generar la carpeta android:

```bash
npx expo prebuild
```
## Limpiar Cache

limpiar cache de dispositivo (variables de entorno)

```bash
npx expo start --clear
```
## Generar APK o AAB 

generar Nuevo Project Id:
```bash
eas int
```
generar apk con el perfil de preview:
```bash
eas build -p android --profile preview
```
## Configurar expo-env.d.ts

agregar el siguiente codigo con la siguiente estructura

```js
declare module "@env" {
   export const API_URL: string;
   export const DEBUG_MODE: boolean;
}
```
