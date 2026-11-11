import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

const HomeLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href={`/(auth)/sign-in`} />;
  return <Stack />;
};

export default HomeLayout;
