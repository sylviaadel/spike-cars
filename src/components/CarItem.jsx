export default function CarItem({ item }) {
  const { company, image, year, driver } = item;

  return (
    <article className="car-item">
      <img src={image} alt={company} />
      <div>
        <h2>{company}</h2>
        <label>
          <b>Driver:</b> {driver}
        </label>
        <label>
          <b>Year:</b> {year}
        </label>
      </div>
    </article>
  );
}
