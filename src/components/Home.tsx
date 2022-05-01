import React from "react";
import { CarType } from "../interface";
import Carousel from "./Carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { View } from "vcc-ui";
import { useMediaQuery } from "react-responsive";

type Props = {
  selectedCars: CarType[] | undefined;
};

const Home: React.FC<Props> = ({ selectedCars }) => {
  const isMobile = useMediaQuery({ maxWidth: 479 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <View
      extend={{
        marginTop: 10,
        fromM: {
          paddingLeft: 15,
          paddingRight: 15
        }
      }}
    >
      {isMobile && (
        <Carousel
          isMobile
          selectedCars={selectedCars}
          height={145}
          slides={1.5}
        />
      )}

      {isTablet && (
        <Carousel selectedCars={selectedCars} height={140} slides={2} />
      )}

      {isDesktop && (
        <Carousel selectedCars={selectedCars} height={125} slides={4} />
      )}
    </View>
  );
};

export default Home;
