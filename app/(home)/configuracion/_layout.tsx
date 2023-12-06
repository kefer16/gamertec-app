import { Stack } from "expo-router";

const _layout = () => {
   return (
      <Stack>
         <Stack.Screen name="index" options={{ headerShown: false }} />
         <Stack.Screen name="perfil" options={{ headerTitle: "Perfil" }} />
      </Stack>
   );
};

export default _layout;
