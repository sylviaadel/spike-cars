import { useState } from "react";

export default function AddCar({ onAddCar }) {
  const [company, setCompany] = useState("");
  const [image, setImage] = useState("");
  const [driver, setDriver] = useState("");
  const [year, setYear] = useState();
  const [status, setStatus] = useState(false);

  function onSubmit(e) {
    const data = {
      company: company,
      image: image,
      driver: driver,
      year: year,
      retired: status,
    };
    e.preventDefault();
    onAddCar(data);
  }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>
        Company:
        <input
          type="text"
          onChange={(event) => setCompany(event.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input type="text" onChange={(event) => setImage(event.target.value)} />
      </label>
      <label>
        Driver Name:
        <input
          type="text"
          onChange={(event) => setDriver(event.target.value)}
        />
      </label>
      <label>
        Year:
        <input type="text" onChange={(event) => setYear(event.target.value)} />
      </label>
      <label>
        Status
        <div className="radiobtn-custom">
          <input
            type="radio"
            value={status}
            name="status"
            checked={status === false}
            onChange={() => {
              setStatus(false);
            }}
          />
          Still Working
          <input
            type="radio"
            value={status}
            name="status"
            checked={status === true}
            onChange={() => {
              setStatus(true);
            }}
          />{" "}
          Retired
        </div>
      </label>
      <button>Submit</button>
    </form>
  );
}
