import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PasswordField } from "./PasswordField";
import { useState } from "react";

const RegistrationPage = () => {
  const [inputName, setInputName] = useState("");
  const [inputLogin, setInputLogin] = useState("");
  const [inputPassword, setInputPassword] = useState("");

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
            <Button colorScheme="green">Registration</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegistrationPage;
