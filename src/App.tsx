import "./App.css";
import PWABadge from "./PWABadge.tsx";

function App() {
  const handleClick = () => {
    alert("v3");
  };

  return (
    <>
      <button onClick={handleClick}>v3</button>
      <PWABadge />
    </>
  );
}

export default App;
