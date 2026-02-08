import Setup from "./pages/Setup";
import Week from "./pages/Week";
import Harvest from "./pages/Harvest";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🌿 GrowLog</h2>
      <Setup />
      <Week />
      <Harvest />
    </div>
  );
}
