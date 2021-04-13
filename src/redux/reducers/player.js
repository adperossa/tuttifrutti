import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
  {
    name: "Axel",
    score: 0,
    id: 1
  },
  {
    name: "Carlos",
    score: 0,
    id: 2
  },
  {
    name: "Nelson",
    score: 0,
    id: 3
  },
  {
    name: "Salem",
    score: 0,
    id: 4
  }
]

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          score: 0
        }
      ];

    case PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.filter(player => player.id !== action.id)
      ]

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return [
        ...state.map(player => {
          if (player.id === action.id) {
            return {
              ...player,
              score: player.score + action.score
            }
          } else return player;
        })
      ]

    default:
      return state;
  }
}