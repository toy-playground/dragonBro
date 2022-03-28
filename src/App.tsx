import Body from "./Body";
import Nav from './Nav';
function App() {
  return (
    <div
      className="overflow-scroll bg-white text-black"
      style={{ minHeight: "100vh" }}
    >
      <Nav />
      <Body />
    </div>
  );
}

export default App;
