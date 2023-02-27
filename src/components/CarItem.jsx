import { deleteDocument, updateDocument } from "../scripts/firestore";
import { useCars } from "../state/CarsProvider";

export default function CarItem({ item, collectionName }) {
  const { id, company, image, year, driver, retired } = item;
  const { dispatch } = useCars();

  const showRetired = retired ? "Already Retired" : "Currently Driving";

  async function onDelete(id) {
    const message = "Are you sure to delete?";
    const result = window.confirm(message);
    if (!result) return;

    await deleteDocument(collectionName, id);
    dispatch({ type: "delete", payload: id });
  }

  async function onUpdate() {
    const data = { ...item, retired: !retired };
    await updateDocument(collectionName, data);
    dispatch({ type: "update", payload: data });
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
        <button onClick={() => onUpdate()} className="btn-secondary">
          Update Driving Status
        </button>
        <button onClick={() => onDelete(id)} className="btn-secondary">
          ❌ Delete Car
        </button>
      </div>
    </article>
  );
}
