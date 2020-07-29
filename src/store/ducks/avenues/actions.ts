import { action } from 'typesafe-actions';
import { AvenuesTypes, IAvenues } from './types';

export const loadRequest = () => action(AvenuesTypes.LOAD_REQUEST);
export const loadRequestSingle = () => action(AvenuesTypes.LOAD_REQUEST_SINGLE);
export const loadUpdate = () => action(AvenuesTypes.LOAD_UPDATE);
export const loadCreate = () => action(AvenuesTypes.LOAD_CREATE);
export const loadDestroy = () => action(AvenuesTypes.LOAD_DESTROY);

export const loadSuccess = (data: IAvenues[]) => action(AvenuesTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(AvenuesTypes.LOAD_FAILURE);
