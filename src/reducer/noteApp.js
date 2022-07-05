import remove from 'lodash.remove'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'

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

export function editnote(obj){
    return {
        type: EDIT_NOTE, 
        payload: obj
    }
}

export const initialState = {
    todos: []
}

export default function noteReducer(state = initialState, action){
    switch(action.type){
        case ADD_NOTE: 
            return {
                ...state,
                todos: [ ...state.todos, { id: action.id, note: action.note }]
             }
        case DELETE_NOTE:
            const del = remove(state.todos, obj => {return obj.id!=action.payload })
            return {
                ...state,
                todos: del
            }
        case EDIT_NOTE:
            const edi = state.todos.map(x => (x.id === action.payload.id ? action.payload : x));
            console.log(edi)
            return {
                ...state,
                todos: edi
            }
        default:
            return state
    }
}