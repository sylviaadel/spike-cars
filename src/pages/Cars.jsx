import CarItem from "../components/CarItem";
import AddCar from "../components/AddCar";
import {
  createDocument,
  updateDocument,
  deleteDocument,
} from "../scripts/fireStore";

export default function CarsPage({ state }) {
  const [cars, setCars] = state;
  const collenctionName = "cars";

  const Cars = cars.map((car) => (
    <CarItem key={car.id} item={car} actions={[onUpdate, onDelete]} />
  ));

  async function onAddCar(data) {
    const documentId = await createDocument(collenctionName, data);
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
    setCars(clonedCars);
    await updateDocument(collenctionName, data);
  }

  async function onDelete(id) {
    //setSelectedTicket(null);
    const clonedCars = [...cars];
    const itemIndex = clonedCars.findIndex((item) => item.id === id);
    clonedCars.splice(itemIndex, 1);
    setCars(clonedCars);
    await deleteDocument(collenctionName, id);
  }
  return (
    <div id="cars-page">
      {Cars}
      <h2>Add New Car:</h2>
      <AddCar onAddCar={onAddCar} />
    </div>
  );
}
