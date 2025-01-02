import "./App.css";
import PWABadge from "./PWABadge.tsx";

function App() {
  const handleClick = () => {
    alert("v2");
  };

  return (
    <>
      <button onClick={handleClick}>v2</button>
      <PWABadge />
    </>
  );
}

export default App;
