import remove from 'lodash.remove'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

let noteID = 0

export function addnote(note){
    return {
        type: ADD_NOTE,
        id: noteID++,
        note
    }
}

export function deletenote(id){
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

const initialState = []

export default function noteReducer(state = initialState, action){
    switch(action.type){
        case ADD_NOTE: 
            return [...state,{id: action.id, note: action.note}]
        case DELETE_NOTE:
            const del = remove(state, obj => {return obj.id!=action.payload})
            return del
        default:
            return state 
    }
}