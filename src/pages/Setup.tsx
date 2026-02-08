import { useState } from "react";
import { post } from "../api";

export default function Setup() {
  const [strain, setStrain] = useState("");
  const [plants, setPlants] = useState(1);

  async function save() {
    await post("/grow", { strain, plants, medium: "Hydro", weeks_total: 9 });
    await post("/electricity", { meter_start: 0, meter_end: 0, price_per_kwh: 0.3 });
    alert("Setup gespeichert");
  }

  return (
    <>
      <input placeholder="Sorte" onChange={e => setStrain(e.target.value)} />
      <input type="number" placeholder="Pflanzen" onChange={e => setPlants(+e.target.value)} />
      <button onClick={save}>Speichern</button>
    </>
  );
}
