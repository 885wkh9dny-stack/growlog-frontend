import { useState } from "react";
import { post } from "../api";

export default function Week() {
  const [vpd, setVpd] = useState(1.3);
  const [ec, setEc] = useState(1.6);
  const [ph, setPh] = useState(5.8);
  const [temp, setTemp] = useState(26);
  const [rl, setRl] = useState(55);

  async function save() {
    const res = await post("/week", {
      week: 1,
      targets: {
        vpd: [1.4, 1.45, 1.5],
        ec: [1.5, 1.6, 1.65],
        ph: [5.8, 5.9, 6.0],
        temp: [25, 26, 27],
        rl: [52, 55, 58],
      },
      actual: { vpd, ec, ph, temp, rl },
    });
    alert(res.score);
  }

  return (
    <>
      <button onClick={save}>Woche speichern</button>
    </>
  );
}
