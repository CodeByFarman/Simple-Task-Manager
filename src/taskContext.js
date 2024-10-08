import { createContext, useReducer } from "react";
import { TaskReducer, initialState } from "./taskReducer";
export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  
    const  [state, dispatch] = useReducer(TaskReducer, initialState);
  
    return(
        <TaskContext.Provider value={{state,dispatch}}>
        {children}
        </TaskContext.Provider>
    );
};