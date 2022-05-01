import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Flex, Icon } from "vcc-ui";
import CarCard from "./CarCard";
import { CarType } from "../interface";

type Props = {
  selectedCars: CarType[] | undefined;
  height: number;
  slides: number;
  isMobile?: boolean;
};

const Carousel: React.FC<Props> = ({
  selectedCars,
  height,
  slides,
  isMobile,
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={110}
      naturalSlideHeight={height}
      totalSlides={selectedCars?.length || 0}
      visibleSlides={slides}
    >
      <Slider>
        {selectedCars?.map((car, index) => {
          return (
            <Slide index={index} key={car.id}>
              <CarCard car={car} />
            </Slide>
          );
        })}
      </Slider>
      {isMobile ? (
        <Flex
          extend={{
            paddingLeft: 12,
          }}
        >
          <DotGroup showAsSelectedForCurrentSlideOnly={true} />
        </Flex>
      ) : selectedCars!.length > slides ? (
        <>
          <ButtonBack style={{ background: "none", border: "none" }}>
            <Icon type="media-previous-48" />
          </ButtonBack>
          <ButtonNext style={{ background: "none", border: "none" }}>
            <Icon type="media-next-48" />
          </ButtonNext>
        </>
      ) : null}
    </CarouselProvider>
  );
};

export default Carousel;
