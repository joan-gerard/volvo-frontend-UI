import { useState } from "react";
import { TabNav, TabNavItem, Text } from "vcc-ui";
import { CarType } from "../interface";

type Props = {
  carList: CarType[] | undefined;
  bodyTypes: string[];
  setFilteredCars: (cars: CarType[] | undefined) => void;
};

const Filter: React.FC<Props> = ({ carList, bodyTypes, setFilteredCars }) => {
  const [active, setActive] = useState(0);

  const getFilteredCars = (carBodyType: string): void => {
    if (bodyTypes.includes(carBodyType)) {
      const filtered = carList?.filter((car) => car.bodyType === carBodyType);
      setFilteredCars(filtered);
    } else {
      setFilteredCars([]);
    }
  };

  return (
    <TabNav enableLineTransition>
      <TabNavItem
        isActive={active === 0}
        onClick={() => {
          setActive(0);
          getFilteredCars("");
        }}
      >
        All
      </TabNavItem>
      {bodyTypes &&
        bodyTypes.map((bodyType, index) => (
          <TabNavItem
            key={index}
            isActive={active === index + 1}
            onClick={() => {
              setActive(index + 1);
              getFilteredCars(bodyType);
            }}
          >
            <Text>{bodyType.toUpperCase()}</Text>
          </TabNavItem>
        ))}
    </TabNav>
  );
};

export default Filter;
