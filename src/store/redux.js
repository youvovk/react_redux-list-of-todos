import { createStore } from 'redux';

const ACTION_TYPES = {
  ADD_NEW_Data: 'DATA::ADD',
};

export const addNewFilm = data => ({
  type: ACTION_TYPES.ADD_NEW_DATA,
  payload: data,
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
        transaction: 'Wardrobes',
        date: '10 Jun 2014',
        amount: '$327.00',
      }, {
        id: 3,
        no: '1',
        transaction: 'Set of tools',
        date: '12 Jun 2014',
        amount: '$125.00',
      }, {
        id: 4,
        no: '1',
        transaction: 'Panoramic pictures',
        date: '22 Jun 2014',
        amount: '$344.00',
      }, {
        id: 5,
        no: '1',
        transaction: 'Phones',
        date: '24 Jun 2014',
        amount: '$235.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Monitors',
        date: '26 Jun 2014',
        amount: '$100.00',
      },
    ],
    [
      {
        id: 1,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 4,
        no: '1',
        transaction: 'Panoramic pictures',
        date: '22 Jun 2014',
        amount: '$344.00',
      }, {
        id: 3,
        no: '1',
        transaction: 'Set of tools',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 5,
        no: '1',
        transaction: 'Phones',
        date: '24 Jun 2014',
        amount: '$235.00',
      }, {
        id: 2,
        no: '1',
        transaction: 'Wardrobes',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Monitors',
        date: '26 Jun 2014',
        amount: '$100.00',
      },
    ],
    [
      {
        id: 4,
        no: '1',
        transaction: 'Panoramic pictures',
        date: '22 Jun 2014',
        amount: '$344.00',
      },
      {
        id: 1,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Monitors',
        date: '26 Jun 2014',
        amount: '$100.00',
      }, {
        id: 2,
        no: '1',
        transaction: 'Wardrobes',
        date: '10 Jun 2014',
        amount: '$327.00',
      }, {
        id: 3,
        no: '1',
        transaction: 'Set of tools',
        date: '12 Jun 2014',
        amount: '$125.00',
      }, {
        id: 5,
        no: '1',
        transaction: 'Phones',
        date: '24 Jun 2014',
        amount: '$235.00',
      },
    ],
    [
      {
        id: 4,
        no: '1',
        transaction: 'Panoramic pictures',
        date: '22 Jun 2014',
        amount: '$344.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Monitors',
        date: '26 Jun 2014',
        amount: '$100.00',
      }, {
        id: 1,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 3,
        no: '1',
        transaction: 'Set of tools',
        date: '12 Jun 2014',
        amount: '$125.00',
      }, {
        id: 5,
        no: '1',
        transaction: 'Phones',
        date: '24 Jun 2014',
        amount: '$235.00',
      }, {
        id: 2,
        no: '1',
        transaction: 'Wardrobes',
        date: '10 Jun 2014',
        amount: '$327.00',
      },
    ],
    [
      {
        id: 4,
        no: '1',
        transaction: 'Panoramic pictures',
        date: '22 Jun 2014',
        amount: '$344.00',
      }, {
        id: 5,
        no: '1',
        transaction: 'Phones',
        date: '24 Jun 2014',
        amount: '$235.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Monitors',
        date: '26 Jun 2014',
        amount: '$100.00',
      }, {
        id: 1,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 2,
        no: '1',
        transaction: 'Wardrobes',
        date: '10 Jun 2014',
        amount: '$327.00',
      }, {
        id: 3,
        no: '1',
        transaction: 'Set of tools',
        date: '12 Jun 2014',
        amount: '$125.00',
      },
    ],
    [
      {
        id: 3,
        no: '1',
        transaction: 'Set of tools',
        date: '12 Jun 2014',
        amount: '$125.00',
      }, {
        id: 5,
        no: '1',
        transaction: 'Phones',
        date: '24 Jun 2014',
        amount: '$235.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Monitors',
        date: '26 Jun 2014',
        amount: '$100.00',
      },{
        id: 4,
        no: '1',
        transaction: 'Panoramic pictures',
        date: '22 Jun 2014',
        amount: '$344.00',
      }, {
        id: 1,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 2,
        no: '1',
        transaction: 'Wardrobes',
        date: '10 Jun 2014',
        amount: '$327.00',
      },
    ],
    [
      {
        id: 2,
        no: '1',
        transaction: 'Wardrobes',
        date: '10 Jun 2014',
        amount: '$327.00',
      }, {
        id: 1,
        no: '1',
        transaction: 'Security doors',
        date: '16 Jun 2014',
        amount: '$482.00',
      }, {
        id: 4,
        no: '1',
        transaction: 'Panoramic pictures',
        date: '22 Jun 2014',
        amount: '$344.00',
      }, {
        id: 3,
        no: '1',
        transaction: 'Set of tools',
        date: '12 Jun 2014',
        amount: '$125.00',
      }, {
        id: 5,
        no: '1',
        transaction: 'Phones',
        date: '24 Jun 2014',
        amount: '$235.00',
      }, {
        id: 6,
        no: '1',
        transaction: 'Monitors',
        date: '26 Jun 2014',
        amount: '$100.00',
      },
    ],
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_FILM: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer);
