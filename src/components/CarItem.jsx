export default function CarItem({ item, actions }) {
  const { id, company, image, year, driver, retired } = item;
  const [onUpdate, onDelete] = actions;

  const showRetired = retired ? "Already Retired" : "Currently Driving";

  function onClickDelete() {
    const message = "Are you sure to delete?";
    const result = window.confirm(message);
    if (result) onDelete(id);
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
        <button onClick={() => onClickDelete(id)} className="btn-secondary">
          ❌ Delete Car
        </button>
      </div>
    </article>
  );
}
