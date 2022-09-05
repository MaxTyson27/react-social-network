let defaultState = {
  friends: [
    {
      id: 1,
      name: "Deydara",
      avatar:
        "https://i.pinimg.com/originals/85/91/21/859121444f40ce35a0ab4610a73ab5d2.jpg",
    },
    {
      id: 2,
      name: "Kisame",
      avatar:
        "https://i.pinimg.com/originals/8b/cc/17/8bcc17e26333c6b1104273b65e7546de.jpg",
    },
    {
      id: 3,
      name: "Obito",
      avatar:
        "https://i.pinimg.com/originals/8e/75/5d/8e755d33941d01599b91a6cdd98941c3.jpg",
    },
    {
      id: 4,
      name: "Kabuto",
      avatar:
        "https://static.wixstatic.com/media/ebf6a7_9c6472ff918b46f2804424af9d810de8~mv2.jpg/v1/fill/w_530,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ebf6a7_9c6472ff918b46f2804424af9d810de8~mv2.jpg",
    },
  ],
};

const sidebarReducer = (state = defaultState, action) => {
  return state;
};

export default sidebarReducer;
