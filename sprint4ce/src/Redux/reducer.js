import { login } from "./actions";

const init = {login:false};

export const Logreducer = (store = init, { type, payload }) => {
  switch (type) {
    case login:return {...store,login:payload}
    default:
      return store;
  }
};