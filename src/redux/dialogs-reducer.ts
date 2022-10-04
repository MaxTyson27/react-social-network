const ADD_MESSAGE = "ADD-MESSAGE";

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let defaultState = {
  dialogs: [
    { id: 1, name: "Obito" },
    { id: 2, name: "Zetsu" },
    { id: 3, name: "Sasuke" },
    { id: 4, name: "Naruto" },
    { id: 5, name: "Deydara" },
    { id: 6, name: "Sasory" },
    { id: 7, name: "Hidan" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Madara, how are u?" },
    { id: 2, message: "Tobirama is very angry for you" },
    { id: 3, message: "Is Hashirama your best friend?" },
  ] as Array<MessageType>,
};

export type DefaultStateType = typeof defaultState

const dialogsReducer = (state = defaultState, action: any): DefaultStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: Date.now(),
        message: action.message,
        isMine: true,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

type addMessageActionType = {
  type: typeof ADD_MESSAGE
  message: string
}

export const addMessage = (message: string): addMessageActionType => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;
