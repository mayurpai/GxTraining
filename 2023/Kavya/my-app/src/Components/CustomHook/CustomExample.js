import useFetch from "./useFetch";

const CustomExample = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
    return (
      <div style={{ display:"grid",flexDirection:"column",height:"100vh",width:"100vw",placeItems:"center"}}>
        {data &&
          data.map((item) => {
            return <h6  key={item.id}>{item.id}-{item.title}</h6>;
          })}
      </div>
    );
  };

export default CustomExample;