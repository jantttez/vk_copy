import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

interface Props {
  userNameError?: string;
  nameError?: string;
  emailError?: string;
  passwordError?: string;
}

export function useToastError({ userNameError, nameError, emailError, passwordError }: Props) {
  const toast = useToast();
  useEffect(() => {
    if (userNameError) {
      toast({ position: "top", status: "error", description: userNameError, duration: 1000 });
    }
    if (nameError) {
      toast({ position: "top", status: "error", description: nameError, duration: 1000 });
    }
    if (nameError) {
      toast({ position: "top", status: "error", description: emailError, duration: 1000 });
    }
    if (emailError) {
      toast({ position: "top", status: "error", description: passwordError, duration: 1000 });
    }
  }, [userNameError, nameError, passwordError, emailError]);
}
