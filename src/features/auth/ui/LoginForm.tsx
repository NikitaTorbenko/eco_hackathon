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
import { useLoginApiMutation } from "..";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { pathRoutes } from "shared/config/route-path";
import { saveAuthData } from "entities/auth";
  
export const LoginForm = memo(() => {
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [isRememberMy, setRememberMy] = useState(true)

    const [login, result] = useLoginApiMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginHandle = useCallback(async() => {
      await login({
        login: inputLogin,
        password: inputPassword,
      })
    }, [inputLogin, inputPassword])

    useEffect(() => {
      if(result.data){
        dispatch(saveAuthData({
          token: result.data,
          isRememberMy: isRememberMy
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
                Войдите в свою учетную запись
              </Heading>
              <Text color="fg.muted">
                Нет аккаунта? <Link to="/registration">Зарегестрироваться</Link>
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
                  <FormLabel htmlFor="email">Почта</FormLabel>
                  <Input
                    value={inputLogin}
                    onChange={(e) => setInputLogin(e.target.value)}  
                    id="email" type="email" />
                </FormControl>
                <PasswordField
                  inputPassword={inputPassword}
                  setInputPassword={setInputPassword}/>
              </Stack>
              <HStack justify="space-between">
                <Checkbox onChange={() => setRememberMy(!isRememberMy)} defaultChecked>Запомнить меня</Checkbox></HStack>
              <Button onClick={loginHandle} colorScheme="green">Зарегестрироваться</Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    );
});
  