import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
} from "@react-email/components";

export default function WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>Hello World</Preview>
      <Body>
        <Container>
          <Heading>Hello World</Heading>
        </Container>
      </Body>
    </Html>
  );
}
