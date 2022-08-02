
let defaultState = {
  friends: [
    { id: 1, name: 'Deydara', avatar: 'https://i.pinimg.com/originals/85/91/21/859121444f40ce35a0ab4610a73ab5d2.jpg' },
    { id: 2, name: 'Kisame', avatar: 'https://i.pinimg.com/originals/8b/cc/17/8bcc17e26333c6b1104273b65e7546de.jpg' },
    { id: 3, name: 'Obito', avatar: 'https://i.pinimg.com/originals/8e/75/5d/8e755d33941d01599b91a6cdd98941c3.jpg' }, 
    { id: 4, name: 'Kabuto', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1362253/pub_5e43bfb1d3f8624cf90db4cc_5e43cb054a28a11ab2b4a115/scale_1200' }
  ]
}

const sidebarReducer = (state = defaultState, action) => {
  return state
}


export default sidebarReducer