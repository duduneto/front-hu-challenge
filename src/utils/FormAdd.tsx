import * as React from "react";

const FormAdd: React.FC = () => {
  return (
    <div className="form-container">
      <div>
        <div className="form-item">
          <label>Nome da Avenida</label>
          <input
            type="text"
            id="User"
            name="Name"
            className="input-form mt-1"
          />
        </div>
        <div className="form-item">
          <label>Extensão da Avenida (km)</label>
          <input
            type="text"
            id="User"
            name="Name"
            className="input-form mt-1"
          />
        </div>
        <div className="form-item">
          <label>Esta avenida possui Ciclovia?</label>
          <input
            type="text"
            id="User"
            name="Name"
            className="input-form mt-1"
          />
        </div>
        <div className="form-item">
          <label>Extensão da Ciclovia</label>
          <input
            type="text"
            id="User"
            name="Name"
            className="input-form mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FormAdd;
