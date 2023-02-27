import { useEffect, useState } from "react";
import "./App.scss";
import { readDocuments } from "./scripts/fireStore";
import Cars from "./pages/Cars";
import Loader from "./components/Loader";
import { useCars } from "./state/CarsProvider";

export default function App() {
  const { dispatch } = useCars();
  const [status, setStatus] = useState(0);
  const COLLECTION_NAME = "cars";
  useEffect(() => {
    loadData(COLLECTION_NAME);
  }, []);

  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);

    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  return (
    <div className="App">
      <h1>List of Cars:</h1>
      {status === 0 && <Loader />}
      {status === 1 && <Cars />}
      {status === 2 && <p>Error ❌</p>}
    </div>
  );
}
