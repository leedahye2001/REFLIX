// import { getUserByToken } from "../apis/user";
// import { createContext, useReducer, useEffect, useContext } from "react";
// import axios from "axios";

// export const UserContext = createContext();
// export const UserDispatchContext = createContext();

// const initialState = {
//   users: {
//     loading: false,
//     data: null,
//     error: null,
//   },
//   user: {
//     loading: false,
//     data: null,
//     error: null,
//   },
// };

// // 로딩중일 때 바뀔 상태 객체
// const loadingState = {
//   loading: true,
//   data: null,
//   error: null,
// };

// // 성공했을 때의 상태 만들어주는 함수
// const success = (data) => ({
//   data,
//   error: null,
// });

// // 실패했을 때의 상태 만들어주는 함수
// const error = (error) => ({
//   data: null,
//   error: error,
// });

// function usersReducer(state, action) {
//   switch (action.type) {
//     case "LOGIN":
//       // console.log(action.payload);
//       // return action.payload;
//       return {
//         ...state,
//         users: loadingState,
//       };
//     case "LOGOUT":
//       return initialState;
//     case "GET_USERS":
//       return {
//         ...state,
//         users: loadingState,
//       };
//     case "GET_USERS_SUCCESS":
//       return {
//         ...state,
//         users: success(action.data),
//       };
//     case "GET_USERS_ERROR":
//       return {
//         ...state,
//         users: error(action.error),
//       };
//     case "GET_USER":
//       return {
//         ...state,
//         user: loadingState,
//       };
//     case "GET_USER_SUCCESS":
//       return {
//         ...state,
//         user: success(action.data),
//       };
//     case "GET_USER_ERROR":
//       return {
//         ...state,
//         user: error(action.error),
//       };
//     default:
//       throw new Error(`Unhanded action type: ${action.type}`);
//   }
// }

// export const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(usersReducer, initialState);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (token && state.users === "") {
//       getUserByToken(token).then((data) =>
//         dispatch({ type: "LOGIN", payload: data.users })
//       );
//     }
//   }, [token, state.users]);

//   return (
//     <UserContext.Provider value={state}>
//       <UserDispatchContext.Provider value={dispatch}>
//         {children}
//       </UserDispatchContext.Provider>
//     </UserContext.Provider>
//   );
// };

// export async function getUsers(dispatch) {
//   dispatch({ type: "GET_USERS" });
//   try {
//     const response = await axios.get("/auth/login");
//     dispatch({ type: "GET_USERS_SUCCESS", data: response.data });
//   } catch (e) {
//     dispatch({ type: "GET_USERS_ERROR", error: e });
//   }
// }

// export async function getUser(dispatch, id) {
//   dispatch({ type: "GET_USER" });
//   try {
//     const response = await axios.get(`/auth/login/${id}`);
//     dispatch({ type: "GET_USER_SUCCESS", data: response.data });
//   } catch (e) {
//     dispatch({ type: "GET_USER_ERROR", error: e });
//   }
// }

// // State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
// export function useUsersState() {
//   const state = useContext(UserContext);
//   if (!state) {
//     throw new Error("Cannot find UsersProvider");
//   }
//   return state;
// }

// // Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
// export function useUsersDispatch() {
//   const dispatch = useContext(UserDispatchContext);
//   if (!dispatch) {
//     throw new Error("Cannot find UsersProvider");
//   }
//   return dispatch;
// }

import { getUserByToken } from "../apis/user";
import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";

export const UserStateContext = createContext(null);
export const UserDispatchContext = createContext(null);

const initialUser = {
  userList: [],
  user: null,
};

// // 로딩중일 때 바뀔 상태 객체
// const loadingState = {
//   id: null,
//   name: null,
// };

// // 성공했을 때의 상태 만들어주는 함수
// const success = (id, name, token) => ({
//   id,
//   name,
// });

// 실패했을 때의 상태 만들어주는 함수
// const error = error => ({
//   loading: false,
//   data: null,
//   error: error
// });

function userReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_USER":
      return {
        ...state,
        userList: state.userList.concat(action.user),
      };
    case "LOGIN":
      console.log(action.userId);
      return {
        ...state,
        user: {
          userId: action.userId,
        },
      };
    case "LOGOUT":
      return { ...state, user: null };
    // case "GET_USER":
    //   return {
    //     ...state,
    //     payload: loadingState,
    //   };
    // case "GET_USER_SUCCESS":
    //   return {
    //     ...state,
    //     payload: success(action.id, action.name),
    //   };
    // case "GET_USER_ERROR":
    //   return {
    //     ...state,
    //     payload: error(action.error),
    //   };
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
