import MetaTags from "../components/Head";
import { PageTemplate } from "@/templates";
import { BtnPrimary } from "@/atoms";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <MetaTags title="Home | App" />
      <PageTemplate>
        <Box>
          <Text>home page</Text>
        </Box>
      </PageTemplate>
    </>
  );
}
