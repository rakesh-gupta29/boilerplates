import { Container } from "@chakra-ui/react";
import { Header, Footer } from "@/organisms";
export default function PageTemplate({
  isHeader = true,
  isFooter = true,
  children,
}) {
  return (
    <>
      <Container maxW="1500" centerContent>
        {isHeader && <Header />}
        {children}
        {isFooter && <Footer />}
      </Container>
    </>
  );
}
