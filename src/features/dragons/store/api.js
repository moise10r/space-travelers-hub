// ACTION TYPES
export const API_REQUESTED = 'api/requested';
export const API_CALL_SUCCESS = 'api/success';
export const API_CALL_FAIL = 'api/fail';

// ACTION CREATORS

export const requestAPICall = (payload) => ({
  type: API_REQUESTED,
  payload,
});
export const onAPICallSuccess = () => ({
  type: API_CALL_SUCCESS,
});
export const onAPICallFail = () => ({
  type: API_CALL_FAIL,
});
