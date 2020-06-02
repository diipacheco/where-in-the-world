/* eslint-disable no-unused-vars */
import { runSaga } from 'redux-saga';
import { AnyAction } from 'redux';

import api from '../../../../../services/api';
import payload from '../../../../../utils/tests/payloadMock';
import * as actions from '../../actions';
import * as sagas from '../../sagas';

describe('sagas integration tests', () => {
  it('should call api and dispatch LOAD_SUCCESS action', async () => {
    expect.hasAssertions();

    const response = {
      data: payload,
    };

    const requestCountries = jest.spyOn(api, 'get')
      .mockResolvedValue(response);

    const dispatched: Array<AnyAction> = [];

    await runSaga({
      dispatch: (action: AnyAction) => dispatched.push(action),
    }, sagas.handleLoadRequestAction);

    expect(requestCountries).toHaveBeenCalledTimes(1);
    expect(dispatched).toStrictEqual([actions.handleLoadSuccess(response.data)]);

    requestTools.mockClear();
  });

  it('should call api and dispatch LOAD_FAILURE action', async () => {
    expect.hasAssertions();

    const requestCountries = jest.spyOn(api, 'get').mockRejectedValue(new Error());

    const dispatched: Array<AnyAction> = [];

    await runSaga({
      dispatch: (action: AnyAction) => dispatched.push(action),
    }, sagas.handleLoadRequestAction);

    expect(requestCountries).toHaveBeenCalledTimes(1);
    expect(dispatched).toStrictEqual([actions.handleLoadFailure()]);

    requestTools.mockClear();
  });
});
