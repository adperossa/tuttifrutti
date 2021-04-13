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
      const newId = state.lastPlayerId + 1;
      const addPlayerList = [...state.players, {
        name: action.name,
        score: 0,
        id: newId
      }];
      return {
        ...state,
        players: addPlayerList,
        lastPlayerId: newId
      };

    case PlayerActionTypes.REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id),
      };

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      const newPlayerList = state.players.map(player => {
        if (player.id === action.id) {
          return {
            ...player,
            score: player.score + action.score
          }
        } else return player;
      });
      return {
        ...state,
        players: newPlayerList
      };

    default:
      return state;
  }
}