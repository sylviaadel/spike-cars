import { removeDocument } from "../scripts/fireStore";

export default function CarItem({ item, onUpdate }) {
  const { company, image, year, driver, retired } = item;

  const showRetired = retired ? "Already Retired" : "Currently Driving";

  async function deleteCar(data) {
    await removeDocument("cars", data);
    //setSelectedTicket(null);
  }
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
        <label>
          <b>Status:</b> {showRetired}
        </label>
        <button
          onClick={() => onUpdate({ ...item, retired: !retired })}
          className="btn-secondary"
        >
          Update Driving Status
        </button>
        <button onClick={deleteCar} className="btn-secondary">
          ❌ Delete Car
        </button>
      </div>
    </article>
  );
}
