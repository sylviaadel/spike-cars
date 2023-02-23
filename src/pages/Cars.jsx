import CarItem from "../components/CarItem";
import AddCar from "../components/AddCar";
import { createDocument, updateDocument } from "../scripts/fireStore";

export default function CarsPage({ state }) {
  const [cars, setCars] = state;

  const Cars = cars.map((car) => (
    <CarItem key={car.id} item={car} onUpdate={onUpdate} />
  ));

  async function onAddCar(data) {
    const documentId = await createDocument("cars", data);
    const newCar = { id: documentId, ...data };
    const result = [...cars, newCar];

    setCars(result);
  }

  async function onUpdate(data) {
    //copy state
    const clonedCars = [...cars];

    //find item to modify
    const itemIndex = clonedCars.findIndex((item) => item.id === data.id);

    //modify item with updated data
    clonedCars[itemIndex] = data;

    //replce state
    await updateDocument("cars", data);
    setCars(clonedCars);
  }
  return (
    <div id="cars-page">
      {Cars}
      <h2>Add New Car:</h2>
      <AddCar onAddCar={onAddCar} />
    </div>
  );
}
