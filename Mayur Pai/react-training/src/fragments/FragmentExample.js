import React from "react";

export default function FragmentExample({ sampleData }) {
  return (
    <>
      {sampleData.map((i, id) => {
        return <React.Fragment key={id}>
          <div className="fragment-body">
            <h1>{i.id}</h1>
            <h1>{i.name}</h1>
          </div>
        </React.Fragment>;
      })}
    </>
  );
}
