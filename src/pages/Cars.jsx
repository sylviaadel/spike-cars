import CarItem from "../components/CarItem";
import AddCar from "../components/AddCar";
import { useCars } from "../state/CarsProvider";

export default function CarsPage({ state }) {
  const { cars } = useCars();
  const COLLECTION_NAME = "cars";

  const Cars = cars.map((car) => (
    <CarItem key={car.id} item={car} collectionName={COLLECTION_NAME} />
  ));

  return (
    <div id="cars-page">
      {Cars}
      <h2>Add New Car:</h2>
      <AddCar collectionName={COLLECTION_NAME} />
    </div>
  );
}
