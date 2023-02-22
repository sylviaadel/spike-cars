import { useEffect, useState } from "react";
import "./App.scss";
import { readDocuments } from "./scripts/fireStore";
import Cars from "./pages/Cars";
import Loader from "./components/Loader";

export default function App() {
  const [status, setStatus] = useState(0);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadData("cars");
  }, []);

  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);

    onSuccess(data);
  }

  function onSuccess(data) {
    setCars(data);
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  return (
    <div className="App">
      <h1>List of Cars:</h1>
      {status === 0 && <Loader />}
      {status === 1 && <Cars state={[cars, setCars]} />}
      {status === 2 && <p>Error ❌</p>}
    </div>
  );
}
