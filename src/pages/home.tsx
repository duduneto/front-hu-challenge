import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAvenues } from "../store/ducks/avenues/types";

import { Table } from "../components";

interface IRootState {
  avenues: {
    data: IAvenues[];
    loading: boolean;
    error: boolean;
    refresh: boolean;
  };
}

const selectAvenue = (state: IRootState) => state.avenues;

const Home: React.FC = (props) => {
  const dispatch = useDispatch();

  const avenues = useSelector(selectAvenue);

  React.useEffect(() => {
    dispatch({
      type: "@avenues/LOAD_REQUEST",
    });
  }, [avenues.refresh]);

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
    <div style={{ padding: "1rem" }}>
      <Table data={avenues.data} columns={columns} />
    </div>
  );
};

export default Home;
