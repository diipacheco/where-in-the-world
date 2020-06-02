/* eslint-disable no-unused-vars */
import * as actions from '../../actions';
import { CountriesTypes } from '../../types';

import handleExpectedAction from '../../../../../utils/tests/handleExpectedAction';
import payload from '../../../../../utils/tests/payloadMock';

describe('action creators unit tests', () => {
  it('should create a action to handle countries request', () => {
    expect.hasAssertions();

    const action = handleExpectedAction({ type: CountriesTypes.LOAD_REQUEST });

    expect(actions.handleLoadRequest()).toStrictEqual(action);
  });

  it('should create a action to handle countries success request', () => {
    expect.hasAssertions();

    const action = handleExpectedAction(
      {
        type: CountriesTypes.LOAD_SUCCESS,
        payload: { countries: payload },
      },
    );

    expect(actions.handleLoadSuccess(payload)).toStrictEqual(action);
  });

  it('should create a action to handle countries failure request', () => {
    expect.hasAssertions();

    const action = handleExpectedAction({ type: CountriesTypes.LOAD_FAILURE });

    expect(actions.handleLoadFailure()).toStrictEqual(action);
  });
});
