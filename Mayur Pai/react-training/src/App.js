import "./App.css";
import Count from "./components/Count";
import ObjectChange from "./components/ObjectChange";
import TemperatureConverterClass from "./components/TemperatureConverterClass";
import UseCallback from "./components/UseCallback";
import UseRefExample from "./components/UseRefExample";
import UseStateExample from "./components/UseStateExample";
const App = () => {
  return (
    // <MyContextProvider>
    <div className="App">
      {/* <UseStateExample />
      <UseRefExample /> */}
      {/* <TemperatureConverterClass /> */}
      <UseCallback />
    </div>
    // </MyContextProvider>
  );
};

export default App;
