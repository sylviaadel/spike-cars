export default function carsReducer(state, action) {
  switch (action.type) {
    case "initializeArray":
      return onInitializeArray(action);
    case "create":
      return onCreate(state, action);
    case "update":
      return onUpdate(state, action);
    case "delete":
      return onDelete(state, action);
    default:
      throw new Error("Unhandled action:", action.type);
  }
}
function onInitializeArray(action) {
  const newCars = action.payload;
  return newCars;
}
function onCreate(state, action) {
  const newCar = action.payload;
  return [...state, newCar];
}
function onUpdate(state, action) {
  const updatedCar = action.payload;
  const id = updatedCar.id;
  const clonedCars = [...state];
  const itemIndex = clonedCars.findIndex((item) => item.id === id);
  clonedCars[itemIndex] = updatedCar;
  return clonedCars;
}
function onDelete(state, action) {
  const id = action.payload;
  const clonedCars = [...state];
  const itemIndex = clonedCars.findIndex((item) => item.id === id);
  clonedCars.splice(itemIndex, 1);
  return clonedCars;
}
