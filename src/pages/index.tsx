import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Division } from "../components/Division";
import { Features } from "../components/Features/Index";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | WorldTrip</title>
      </Head>


      <Header />
      <Banner />
      <Features />
      <Division />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slider />
      
    </Flex>
  )
}
