// tslint:disable-next-line:no-console
import * as React from "react";
interface ITableProps {
  data: any[];
  columns: any[];
}

import { Modal } from "../index";
import { FormAdd } from '../../utils';

const Table: React.FC<ITableProps> = (props) => {
  const { data, columns } = props;

  const [id, setId] = React.useState<number | null>();
  const [modal, setModal] = React.useState<boolean>(false);

  const handleSelectedRow = (itemId: number) => {
    if (id === itemId) {
      setId(null);
    } else {
      setId(itemId);
    }
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleModalOnClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className="header-main-page-container">
        <div>
          <h2>Avenidas de Recife</h2>
        </div>
        <div className="header-main-page-container-actions">
          <div>
            <button className="btn-primary" onClick={handleOpenModal}>
              Adicionar Novo
            </button>
            <Modal
              open={modal}
              onClose={handleModalOnClose}
              title={"Adicionar Nova Avenida"}
            >
              <FormAdd/>
            </Modal>
          </div>
          <div>
            <button className={!!id ? "btn-danger" : "btn-disable"}>
              Excluir
            </button>
          </div>
        </div>
      </div>
      <div className="box-table">
        <table style={{ width: "100%" }}>
          <tr className="table-header">
            {columns.map((column) => (
              <th>{column.title}</th>
            ))}
          </tr>
          {data.length === 0 || !data ? (
            <div className="empty-table-container">
              <span>Sem Dados</span>
            </div>
          ) : (
            data.map((item) => (
              <tr
                className={`tr-table-body ${id === item.id && `selected-row`}`}
                onClick={() => handleSelectedRow(item.id)}
              >
                {columns.map((column) => {
                  if (!!column.render) {
                    return (
                      <div className="holder-render-container">
                        {column.render()}
                      </div>
                    );
                  } else {
                    return <td>{item[column.target]}</td>;
                  }
                })}
              </tr>
            ))
          )}
        </table>
      </div>
    </>
  );
};

export default Table;
