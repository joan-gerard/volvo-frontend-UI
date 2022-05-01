import { useState, useEffect } from "react";
import { CarType } from "../src/interface";
import Filter from "../src/components/Filter";
import Home from "../src/components/Home";
import carData from "../public/api/cars.json";

type Props = {
  cars: CarType[];
};

const App: React.FC<Props> = ({ cars }) => {
  const [bodyTypes, setBodyTypes] = useState<string[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarType[] | undefined>([]);

  useEffect(() => {
    const allBodyTypes = cars?.map((car) => {
      return car.bodyType;
    });
    const uniqueBodyTypes = Array.from(new Set(allBodyTypes));
    setBodyTypes(uniqueBodyTypes);
  }, [cars]);

  const selectedCars = filteredCars?.length ? filteredCars : cars;

  return (
    <>
      <Filter
        carList={cars}
        bodyTypes={bodyTypes}
        setFilteredCars={setFilteredCars}
      />
      <Home selectedCars={selectedCars} />
    </>
  );
};

export default App;

export const getStaticProps = async () => {
  return {
    props: {
      cars: carData,
    },
  };
};
