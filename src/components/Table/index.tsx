import * as React from "react";
import { Modal } from "../index";
import { FormAdd, FormEdit } from "../../utils";
import { IAvenues } from '../../store/ducks/avenues/types'

    interface ITableProps {
      data: any[];
      columns: any[];
    }

const Table: React.FC<ITableProps> = (props) => {
  const { data, columns } = props;

  const [id, setId] = React.useState<number | null>();
  const [modal, setModal] = React.useState<boolean>(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [selectedToEdit, setSelectedToEdit] = React.useState<IAvenues>();

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

  const handleEditModalOnClose = () => {
    setEditModal(false);
  };

  const handleEdit = (item:IAvenues) => {
    setEditModal(true);
    setSelectedToEdit(item);
  }

  return (
    <>
      <div className="header-main-page-container">
        <div>
          <h2>Avenidas de Recife</h2>
        </div>
        <div className="header-main-page-container-actions">
          <div>
            <button className="btn-primary" onClick={handleOpenModal}>
              Adicionar
            </button>
          </div>
          <div>
            <button className={!!id ? "btn-danger" : "btn-disable"}>
              Excluir
            </button>
          </div>
        </div>
      </div>

      {/* FORMS */}
      <Modal
        open={modal}
        onClose={handleModalOnClose}
        title={"Adicionar Nova Avenida"}
      >
        <FormAdd onCancel={handleModalOnClose} onFinish={handleModalOnClose} />
      </Modal>

      <Modal
        open={editModal}
        onClose={handleEditModalOnClose}
        title={"Adicionar Nova Avenida"}
      >
        <FormEdit
          onCancel={handleEditModalOnClose}
          onFinish={handleEditModalOnClose}
          data={selectedToEdit}
        />
      </Modal>
      {/* ------- */}

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
                        <button onClick={() => {
                          handleEdit(item)
                        }} className="btn-defaul">Edit</button>
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
