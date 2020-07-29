import { IAvenuesState, AvenuesTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: IAvenuesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<IAvenuesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AvenuesTypes.LOAD_REQUEST:
      return { ...state, loading: true, refresh: false };
    case AvenuesTypes.LOAD_CREATE:
      return { ...state, loading: true };
    case AvenuesTypes.LOAD_UPDATE:
      return { ...state, loading: true };
    case AvenuesTypes.LOAD_UPDATE:
      return { ...state, loading: true };
    case AvenuesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        refresh: !!action.payload.refresh,
        data: Array.isArray(action.payload.data) ? action.payload.data : [action.payload.data],
      };
    case AvenuesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
      default: 
      return state;
  }
};

export default reducer;
