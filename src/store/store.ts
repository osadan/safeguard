import { combineReducers } from 'redux'

export const fetchProjects = () => ({
  type: "FETCH_PROJECTS"  
});

export const fetchProjectsSuccess = (projects) => ({
    type: 'FETCH_PROJECTS_SUCCESS',
    payload: projects
});

const initialState = {
    projects: []
}
export function appReducer (state = initialState, action){
    switch(action.type){
        case "FETCH_PROJECTS_SUCCESS":
        return { ...state, 
            projects: action.payload
        };
    }
    return state;
}

export const reducer = combineReducers({
    appReducer
});

