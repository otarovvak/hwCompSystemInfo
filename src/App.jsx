import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchIP, setComputerName, togglePower } from "./feature/InfoSlicer";

function App() {
  const dispatch = useDispatch();
  const { IPaddress, computerName, isPoweredOn } = useSelector(
    (state) => state.info
  );

  return (
    <div>
      <button onClick={() => dispatch(fetchIP())}>Get IP Address</button>
      <button onClick={() => dispatch(setComputerName("My Computer"))}>
        Set Computer Name
      </button>
      <button onClick={() => dispatch(togglePower())}>
        {isPoweredOn ? "Turn Off" : "Turn On"}
      </button>
      <p>IP Address: {IPaddress}</p>
      <p>Computer Name: {computerName}</p>
      <p>Status: {isPoweredOn ? "On" : "Off"}</p>
    </div>
  );
}

export default App;
