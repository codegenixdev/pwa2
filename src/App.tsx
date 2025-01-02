import "./App.css";
import PWABadge from "./PWABadge.tsx";

function App() {
  const handleClick = () => {
    alert("print");
  };

  return (
    <>
      <button onClick={handleClick}>print</button>
      <PWABadge />
    </>
  );
}

export default App;
