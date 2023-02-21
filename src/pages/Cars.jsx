import CarItem from "../components/CarItem";

export default function StudentsPage({ data }) {
  const Cars = data.map((car) => <CarItem key={car.id} item={car} />);

  return <div id="cars-page">{Cars}</div>;
}
