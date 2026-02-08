import { useState } from "react";
import { post } from "../api";

export default function Harvest() {
  const [weight, setWeight] = useState(0);

  async function save() {
    const res = await post("/harvest", { dry_weight_g: weight });
    alert(res.g_per_plant);
  }

  return (
    <>
      <input type="number" onChange={e => setWeight(+e.target.value)} />
      <button onClick={save}>Auswerten</button>
    </>
  );
}
