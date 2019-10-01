import { createStore } from 'redux';

const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
};

export const addNewFilm = film => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: film,
});

const initialState = {
  data: [
    [
      {
        id: 1,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 2,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 3,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 4,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 4,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      },
    ],
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_FILM: {
      return {
        ...state,
        films: [...state.films, action.payload],
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer);
