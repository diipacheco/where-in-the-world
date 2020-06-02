interface ExpectedActionParams {
  type: string
  payload?: {} | undefined
}

export default ({ type, payload }: ExpectedActionParams) => {
  const actionFormat = {
    error: undefined,
    meta: undefined,
    type,
    payload,
  };

  return actionFormat;
};
