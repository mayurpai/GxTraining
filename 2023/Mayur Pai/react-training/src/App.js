import "./App.css";
import MyClassComponent from "./context/MyClassComponent";
import MyProvider from "./context/MyProvider";
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
    <MyProvider>
      <div className="App">
        {/* <FragmentExample sampleData={sampleData} /> */}
        <MyClassComponent sampleData={sampleData}/>
      </div>
    </MyProvider>
  );
};

export default App;
