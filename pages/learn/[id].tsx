import carData from "../../public/api/cars.json";
import { CarType } from "../../src/interface";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import { Flex, Text, View } from "vcc-ui";
import Image from "next/image";

type Props = {
  cars: CarType[];
  selectedCar: CarType;
};

const Learn: React.FC<Props> = ({ selectedCar }) => {
  return (
    <Flex
      extend={{
        maxWidth: 500,
        marginLeft: 12,
        marginRight: 12,
      }}
    >
      <Text>Learn about: </Text>
      <View>
        <Text>{selectedCar.bodyType}</Text>
        <Flex
          extend={{
            flexDirection: "row",
          }}
        >
          <Text extend={{ marginRight: 8 }} subStyle="emphasis">
            {selectedCar.modelName}
          </Text>
          <Text>{selectedCar.modelType}</Text>
        </Flex>
      </View>
      <Image
        src={selectedCar.imageUrl}
        width={500}
        height={400}
        alt="Car model"
      />
    </Flex>
  );
};

export default Learn;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const selectedCar = carData.find((car) => car.id === context?.params?.id);
  return {
    props: {
      cars: carData,
      selectedCar,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = carData.map((car) => car.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
