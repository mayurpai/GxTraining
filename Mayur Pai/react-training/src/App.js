import "./App.css";
import FragmentExample from "./fragments/FragmentExample";

const sampleData = [
  {
    id: 1,
    name: "Mayur",
  },
  {
    id: 2,
    name: "Kavya",
  },
  {
    id: 3,
    name: "Pratham",
  },
  {
    id: 4,
    name: "Monika",
  },
];

const App = () => {
  return (
    <div className="App">
      <FragmentExample sampleData={sampleData} />
    </div>
  );
};

export default App;
