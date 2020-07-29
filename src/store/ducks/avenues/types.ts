
export enum AvenuesTypes {
  LOAD_REQUEST = '@avenues/LOAD_REQUEST',
  LOAD_UPDATE = '@avenues/LOAD_UPDATE',
  LOAD_REQUEST_SINGLE = '@avenues/LOAD_REQUEST_SINGLE',
  LOAD_CREATE = '@avenues/LOAD_CREATE',
  LOAD_DESTROY = '@avenues/LOAD_DESTROY',
  LOAD_SUCCESS = '@avenues/LOAD_SUCCESS',
  LOAD_FAILURE = '@avenues/LOAD_FAILURE',
}

export interface IAvenues {
  id: number,
  name: string,
  extension_km: number,
  has_cycle_track: boolean,
  percent_cycle_track_km: string,
  cycle_track_extension_km: number,
  createdAt: string,
  updatedAt: string,
  refresh: boolean | undefined
}

export interface IAvenuesState {
  readonly data: IAvenues[],
  readonly loading: boolean,
  readonly error: boolean,
}