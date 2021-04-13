import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
  players: [
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
  ],
  lastPlayerId: 4
}

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return {
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            id: state.lastPlayerId + 1
          }
        ],
        lastPlayerId: state.lastPlayerId + 1
      };

    case PlayerActionTypes.REMOVE_PLAYER:
      return {
        players: state.players.filter(player => player.id !== action.id),
        lastPlayerId: state.lastPlayerId
      };

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return {
        players: state.players.map(player => {
          if (player.id === action.id) {
            return {
              ...player,
              score: player.score + action.score
            }
          } else return player;
        }),
        lastPlayerId: state.lastPlayerId
      };

    default:
      return state;
  }
}