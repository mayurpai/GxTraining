import React from "react";

export default function FragmentExample({ sampleData }) {
  return (
    <>
      {sampleData.map((i) => {
        return (
          <React.Fragment key={i.id}>
            <div className="fragment-body">
              <h1>{i.id}</h1>
              <h1>{i.name}</h1>
              <h1>{i.employeeId}</h1>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}
