import CarItem from "../components/CarItem";
import AddCar from "../components/AddCar";
import { createDocument } from "../scripts/fireStore";

export default function CarsPage({ state }) {
  const [cars, setCars] = state;

  const Cars = cars.map((car) => <CarItem key={car.id} item={car} />);

  async function onAddCar(data) {
    const documentId = await createDocument("cars", data);
    const newCar = { id: documentId, ...data };
    const result = [...cars, newCar];

    setCars(result);
  }
  return (
    <div id="cars-page">
      {Cars}
      <h2>Add New Car:</h2>
      <AddCar onAddCar={onAddCar} />
    </div>
  );
}
