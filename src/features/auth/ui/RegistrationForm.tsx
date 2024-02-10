import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { memo, useCallback, useEffect, useState } from "react";
import { PasswordField } from "./password-field/PasswordField";
import { useRegistrationApiMutation } from "..";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { saveAuthData } from "entities/auth";
import { pathRoutes } from "shared/config/route-path";

export const RegistrationForm = memo(() => {
  const [inputLogin, setInputLogin] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isRemeberMy, setRememberMy] = useState(true)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [registration, result] = useRegistrationApiMutation()

  const registrationHandle = useCallback(async() => {
    await registration({
      login: inputLogin,
      name: inputName,
      password: inputPassword
    })
  }, [inputLogin, inputName, inputPassword])

  useEffect(() => {
    if(result.data){
      dispatch(saveAuthData({
        data: {
          id: result.data.token,
          username: result.data.name
        },
        isRememberMy: isRemeberMy
      }))

      navigate(pathRoutes.home.path)
    }
  }, [result.data])

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Sign up for a new account
            </Heading>
            <Text color="fg.muted">
              You have an account? <Link to="/login">Log in</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="login">Login</FormLabel>
                <Input
                  value={inputLogin}
                  onChange={(e) => setInputLogin(e.target.value)}
                  id="login"
                  type="login"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  id="name"
                  type="name"
                />
              </FormControl>
              <PasswordField
                inputPassword={inputPassword}
                setInputPassword={setInputPassword}
              />
            </Stack>
            <HStack justify="space-between">
              <Checkbox onChange={() => setRememberMy(!isRemeberMy)} defaultChecked>Remember me</Checkbox></HStack>
            <Button onClick={registrationHandle} colorScheme="green">Registration</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
})
