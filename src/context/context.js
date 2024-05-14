import { getUserByToken } from "../apis/user";
import { createContext, useReducer, useEffect, useContext } from "react";

export const UserStateContext = createContext(null);
export const UserDispatchContext = createContext(null);

const initialUser = {
  userList: [],
  user: null,
};

function userReducer(state, action) {
  const { type } = action;
  switch (type) {
    case "CREATE_USER":
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case "UPDATE_USER":
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case "LOGIN":
      console.log(action.userId);
      console.log(action.userPw);
      return {
        ...state,
        user: {
          userId: action.userId,
          userPw: action.userPw,
        },
      };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export const UserProvider = ({ children }) => {
  const [state, userDispatch] = useReducer(userReducer, initialUser);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && state.email === "") {
      getUserByToken(token).then((data) =>
        userDispatch({ type: "LOGIN", payload: data.email })
      );
    }
  }, [token, state.email]);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={userDispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  if (!state) throw new Error("Cannot find ContextProvider");
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot find ContextProvider");
  return dispatch;
};
