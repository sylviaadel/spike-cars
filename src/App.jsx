import { useEffect, useState } from "react";
import "./App.scss";
import { readDocuments } from "./scripts/firestore";
import Cars from "./pages/Cars";
import Loader from "./components/Loader";

export default function App() {
  const [status, setStatus] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData("cars");
  }, []);

  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);

    onSuccess(data);
  }

  function onSuccess(data) {
    setData(data);
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  return (
    <div className="App">
      <h1>Available Cars:</h1>
      {status === 0 && <Loader />}
      {status === 1 && <Cars data={data} />}
      {status === 2 && <p>Error ❌</p>}
    </div>
  );
}
