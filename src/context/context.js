import { getUserByToken } from "../apis/user";
import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 성공했을 때의 상태 만들어주는 함수
const success = (data) => ({
  data,
  error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = (error) => ({
  data: null,
  error: error,
});

function usersReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return action.payload;
    case "LOGOUT":
      return initialState;
    case "GET_USERS":
      return {
        ...state,
        users: loadingState,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };
    case "GET_USERS_ERROR":
      return {
        ...state,
        users: error(action.error),
      };
    case "GET_USER":
      return {
        ...state,
        user: loadingState,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: success(action.data),
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        user: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && state.id === "") {
      getUserByToken(token).then((data) =>
        dispatch({ type: "LOGIN", payload: data.id })
      );
    }
  }, [token, state.id]);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export async function getUsers(dispatch) {
  dispatch({ type: "GET_USERS" });
  try {
    const response = await axios.get("/auth/login");
    dispatch({ type: "GET_USERS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_USERS_ERROR", error: e });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: "GET_USER" });
  try {
    const response = await axios.get(`/auth/login/${id}`);
    dispatch({ type: "GET_USER_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_USER_ERROR", error: e });
  }
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUsersState() {
  const state = useContext(UserContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUsersDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
