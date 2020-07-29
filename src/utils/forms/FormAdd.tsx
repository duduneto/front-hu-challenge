import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAvenues } from "../../store/ducks/avenues/types";

import { Loader } from "../../utils";

import { numberMask } from "../index";

interface IFormAddProps {
  onCancel: any;
  onFinish: any;
}

interface IFormState {
  name: string;
  extension: string;
  hasCycleTrack: boolean;
  extensionCycleTrack: string;
}

interface IRootState {
  avenues: {
    data: IAvenues[];
    loading: boolean;
    error: boolean;
  };
}

const selectAvenue = (state: IRootState) => state.avenues;

const FormAdd: React.FC<IFormAddProps> = (props) => {
  const dispatch = useDispatch();
  const decimalMask = numberMask();

  const avenues = useSelector(selectAvenue);

  const { onCancel, onFinish } = props;

  const [requiredFields] = React.useState<string[]>(["name", "extension"]);
  const [missingFields, setMissingFields] = React.useState<boolean>(false);
  const [submit, setSubmit] = React.useState<boolean>(false);
  const [state, setState] = React.useState<IFormState>({
    name: "",
    extension: "",
    hasCycleTrack: false,
    extensionCycleTrack: "",
  });

  React.useEffect(() => {
    if (!!submit && !avenues.loading) {
      onFinish();
    }
  }, [avenues]);

  React.useEffect(() => {
    if (!!missingFields) {
      setMissingFields(false);
    }
  }, [state]);

  const handleState = (newState: any) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const handleSubmit = () => {
    const allFields = requiredFields.some(
      (fieldName: string) => !!state[fieldName] === false
    );
    if (!allFields) {
      setSubmit(true);
      setMissingFields(false);
      const infoToAdd = {
        name: state.name,
        extension_km: Number(state.extension),
        has_cycle_track: state.hasCycleTrack,
        cycle_track_extension_km: state.hasCycleTrack
          ? Number(state.extensionCycleTrack)
          : null,
      };
      dispatch({
        type: "@avenues/LOAD_CREATE",
        payload: infoToAdd,
      });
    } else {
      setMissingFields(true);
    }
  };

  return (
    <div className="form-container">
      {missingFields && (
        <div className="m2">
          <span className="alert-span">Preencha Todos os Campos</span>
        </div>
      )}
      <div>
        <div className="form-item">
          <label>Nome da Avenida*</label>
          <input
            type="text"
            id="User"
            name="Name"
            className="input-form mt-1"
            value={state.name}
            onChange={({ currentTarget }) =>
              handleState({ name: currentTarget.value })
            }
          />
        </div>
        <div className="form-item">
          <label>Extensão da Avenida (km)*</label>
          <input
            type="text"
            id="User"
            name="Name"
            className="input-form mt-1"
            value={state.extension}
            onChange={({ currentTarget }) =>
              handleState({ extension: decimalMask(currentTarget.value) })
            }
          />
        </div>
        <div className="form-item">
          <label>Esta avenida possui Ciclovia?</label>
          <label className="switch mt-1">
            <input
              type="checkbox"
              checked={state.hasCycleTrack}
              onChange={({ currentTarget }) =>
                handleState({ hasCycleTrack: currentTarget.checked })
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
            className={`input-form mt-1 ${
              !state.hasCycleTrack && `input-disabled`
            }`}
            value={state.extensionCycleTrack}
            onChange={({ currentTarget }) =>
              handleState({
                extensionCycleTrack: decimalMask(currentTarget.value),
              })
            }
            disabled={!state.hasCycleTrack}
          />
        </div>
        <div className="form-actions">
          <div>
            <button className="btn-danger" onClick={onCancel}>
              Cancelar
            </button>
          </div>
          <div>
            <button className="btn-primary" onClick={handleSubmit}>
              {avenues.loading ? <Loader size="sm" /> : <span>Salvar</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAdd;
