import "./App.css";
import PWABadge from "./PWABadge.tsx";

function App() {
  const handleClick = () => {
    alert("v1");
  };

  return (
    <>
      <button onClick={handleClick}>v1</button>
      <PWABadge />
    </>
  );
}

export default App;
