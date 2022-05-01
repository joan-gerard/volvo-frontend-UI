import React from "react";
import { Flex, Text, Link } from "vcc-ui";
import { CarType } from "../interface";
import Image from "next/image";

type Props = {
  car: CarType;
};

const CarCard: React.FC<Props> = ({ car }) => {
  return (
    <Flex
      extend={{
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <Text>{car.bodyType}</Text>
      <Flex
        extend={{
          untilL: {
            marginBottom: 15,
          },
          fromL: {
            flexDirection: "row",
            marginBottom: 15,
          },
        }}
      >
        <Text extend={{ marginRight: 5 }} subStyle="emphasis">
          {car.modelName}
        </Text>
        <Text>{car.modelType}</Text>
      </Flex>
      <Image
        src={car.imageUrl}
        width={500}
        height={400}
        alt="Car model"
      />
      <Flex
        extend={{
          marginTop: 12,
          paddingRight: 20,
          paddingLeft: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Link href={`/learn/${car.id}`} arrow="right">
          Learn
        </Link>
        <Link href={`/shop/${car.id}`} arrow="right">
          Shop
        </Link>
      </Flex>
    </Flex>
  );
};

export default CarCard;
