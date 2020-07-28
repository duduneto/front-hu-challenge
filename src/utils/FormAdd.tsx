import * as React from "react";

interface IFormAddProps {
  onCancel: any;
}

const FormAdd: React.FC<IFormAddProps> = (props) => {

  const { onCancel } = props;

  const [name, setName] = React.useState<string>("");
  const [extension, setExtension] = React.useState<string>("");
  const [hasCycleTrack, setHasCycleTrack] = React.useState<boolean>(false);
  const [extensionCycleTrack, setExtensionCycleTrack] = React.useState<string>(
    ""
  );

  const handleSubmit = () => {
    const infoToAdd = {
      name,
      extension_km: extension,
      has_cycle_track: hasCycleTrack,
      cycle_track_extension_km: extensionCycleTrack,
    };
    console.log(infoToAdd);
  };

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
            value={name}
            onChange={({ currentTarget }) => setName(currentTarget.value)}
          />
        </div>
        <div className="form-item">
          <label>Extensão da Avenida (km)</label>
          <input
            type="text"
            id="User"
            name="Name"
            className="input-form mt-1"
            value={extension}
            onChange={({ currentTarget }) => setExtension(currentTarget.value)}
          />
        </div>
        <div className="form-item">
          <label>Esta avenida possui Ciclovia?</label>
          <label className="switch mt-1">
            <input
              type="checkbox"
              checked={hasCycleTrack}
              onChange={({ currentTarget }) =>
                setHasCycleTrack(currentTarget.checked)
              }
            />
            <span className="slider round" />
          </label>
        </div>
        <div className="form-item">
          <label>Extensão da Ciclovia</label>
          <input
            type="text"
            id="User"
            name="Name"
            className={`input-form mt-1 ${!hasCycleTrack && `input-disabled`}`}
            value={extensionCycleTrack}
            onChange={({ currentTarget }) =>
              setExtensionCycleTrack(currentTarget.value)
            }
            disabled={!hasCycleTrack}
          />
        </div>
        <div className="form-actions">
          <div>
            <button className="btn-danger" onClick={onCancel}>Cancelar</button>
          </div>
          <div>
            <button className="btn-primary" onClick={handleSubmit}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAdd;
