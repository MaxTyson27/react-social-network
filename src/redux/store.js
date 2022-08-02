import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hey everybody! I will win in this war', likes: 15 },
        { id: 2, message: 'Hashiramaaaa! Where are you?!', likes: 23 },
        { id: 3, message: 'I\'m going to devour ten tail', likes: 49 },
        { id: 4, message: 'I\'ll kill you, Tobirama', likes: 76 },
      ],
      newPostText: '',
      info: [
        { name: 'Uchiha Madara', avatar: 'https://i.pinimg.com/originals/77/b7/a7/77b7a77a99a2edfca3ef6defccc94241.jpg', clan: 'Uchiha', city: 'Fire', country: 'Konoha', skills: 'Sharingan, Susano' },
      ]
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Obito' },
        { id: 2, name: 'Zetsu' },
        { id: 3, name: 'Sasuke' },
        { id: 4, name: 'Naruto' },
        { id: 5, name: 'Deydara' },
        { id: 6, name: 'Sasory' },
        { id: 7, name: 'Hidan' },
      ],
      messages: [
        { id: 1, message: 'Madara, how are u?' },
        { id: 2, message: 'Tobirama is very angry for you' },
        { id: 3, message: 'Is Hashirama your best friend?' },
      ],
      newMessageText: '',
    },
    sidebar: {
      friends: [
        { name: 'Deydara', avatar: 'https://i.pinimg.com/originals/85/91/21/859121444f40ce35a0ab4610a73ab5d2.jpg' },
        { name: 'Kisame', avatar: 'https://i.pinimg.com/originals/8b/cc/17/8bcc17e26333c6b1104273b65e7546de.jpg' },
        { name: 'Obito', avatar: 'https://i.pinimg.com/originals/8e/75/5d/8e755d33941d01599b91a6cdd98941c3.jpg' }, 
        { name: 'Kabuto', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1362253/pub_5e43bfb1d3f8624cf90db4cc_5e43cb054a28a11ab2b4a115/scale_1200' }
      ]
    },
    
  },
  _callSubsriber() {
    console.log('state');
  },

  getState(){
    return this._state
  },
  subscriber(observer) {
    this._callSubsriber = observer  // паттерн observer // publisher-subscriber
  },
  
  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubsriber(this._state)
  }
}



window.store = store

export default store

// store - OOP