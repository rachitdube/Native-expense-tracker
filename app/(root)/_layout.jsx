import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import PageLoader from "../../components/PageLoader";

export default function Layout() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <PageLoader />;
  if (!isSignedIn) return <Redirect href={"/(auth)/sign-in"} />;
  return <Stack screenOptions={{ headerShown: false }} />;
}
