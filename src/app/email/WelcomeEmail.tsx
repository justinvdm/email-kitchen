import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
} from "@react-email/components";

export default function WelcomeEmail({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Preview>Hello {name}</Preview>
      <Body>
        <Container>
          <Heading>Hello {name}</Heading>
        </Container>
      </Body>
    </Html>
  );
}
