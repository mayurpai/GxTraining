import "./App.css";
import Timer from "./components/Timer";

const sampleData = [
  {
    id: 1,
    name: "Mayur",
    employeeId: 3976,
  },
  {
    id: 2,
    name: "Kavya",
    employeeId: 3977,
  },
  {
    id: 3,
    name: "Pratham",
    employeeId: 3978,
  },
  {
    id: 4,
    name: "Monika",
    employeeId: 3979,
  },
];

const App = () => {
  return (
    <div className="App">
      <Timer></Timer>
      {/* <FragmentExample sampleData={sampleData}/> */}
    </div>
  );
};

export default App;
