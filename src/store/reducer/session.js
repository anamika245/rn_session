import {SESSION_ACTIVATE, SESSION_DEACTIVATE} from '../action/session';

const initialState = {
  isSessionActive: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SESSION_ACTIVATE: {
      return {...state, isSessionActive: true};
    }
    case SESSION_DEACTIVATE: {
      return {...state, isSessionActive: false};
    }
    default: {
      return state;
    }
  }
}
