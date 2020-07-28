import * as React from "react";
import "./App.css";

import { Table } from "./components";

const App: React.FC = () => {
  const dataTable = [
    {
      id:1,
      createdAt: "2020-07-28T06:14:12.770Z",
      cycle_track_extension_km: 10,
      extension_km: 20,
      has_cycle_track: false,
      name: "Avenida Principal",
      percent_cycle_track_km: "0%",
    },
    {
      id:2,
      createdAt: "2020-07-28T06:14:12.770Z",
      cycle_track_extension_km: 1,
      extension_km: 15,
      has_cycle_track: false,
      name: "Avenida Secundaria",
      percent_cycle_track_km: "0%",
    },
    {
      id:3,
      createdAt: "2020-07-28T06:14:12.770Z",
      cycle_track_extension_km: 2,
      extension_km: 10,
      has_cycle_track: false,
      name: "Avenida Perimetral",
      percent_cycle_track_km: "0%",
    },
  ];

  const columns = [
    {
      key: "0",
      title: "Nome da Avenida",
      target: "name",
    },
    {
      key: "1",
      title: "Extensão (km)",
      target: "extension_km",
    },
    {
      key: "2",
      title: "Extensão Ciclo Faixa (km)",
      target: "cycle_track_extension_km",
    },
    {
      key: "3",
      title: "Ciclo Faixa (%)",
      target: "percent_cycle_track_km",
    },
    {
      key: "4",
      title: "Ações",
      target: "actions",
      render: () => {
        return <button className="btn-defaul">Edit</button>;
      },
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <Table data={dataTable} columns={columns} />
    </div>
  );
};

export default App;
