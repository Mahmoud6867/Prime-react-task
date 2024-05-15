import { useState, useEffect } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { TransformHierarchy } from "../utils/TransformHierarchy";

export default function TreeTableComponent() {
  const input = [
    { id: 1, name: "Yasser El Ghandour", ManagerID: null },
    { id: 2, name: "Alaa Hassan", ManagerID: 1 },
    { id: 4, name: "Ezzat", ManagerID: 2 },
    { id: 5, name: "Eaz", ManagerID: 2 },
  ];

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const hierarchy = TransformHierarchy({ input });
    console.log(hierarchy);
    setNodes(hierarchy);
  }, []);
  return (
    <section>
      <TreeTable value={nodes} tableStyle={{ width: "100%" }}>
        <Column
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            textAlign: "start",
            padding: "10px",
          }}
          field="name"
          header="Name"
          expander
        ></Column>
        <Column
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            textAlign: "center",
            padding: "10px",
          }}
          field="id"
          header="id"
        ></Column>
        <Column
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            textAlign: "center",
            padding: "10px",
          }}
          field="ManagerID"
          header="Manager ID"
        ></Column>
      </TreeTable>
    </section>
  );
}
