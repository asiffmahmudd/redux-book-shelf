

const initialState = {
    readingList: [],
    discoveredList: [],
    finishedList: []
}

const bookReducers = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_BOOKS": {
            const newState = {
                ...state,
                discoveredList: action.payload
            }
            return newState;
        }

        case "LOAD_READING": {
            const newState = {
                ...state,
                readingList: action.payload
            }
            return newState;
        }

        case "LOAD_FINISHED": {
            const newState = {
                ...state,
                finishedList: action.payload
            }
            return newState;
        }

        case "ADD_TO_READING_LIST": {
            const newState = {
                ...state,
                readingList: [...state.readingList, action.payload]
            }
            return newState;
        }

        case "REMOVE_FROM_READING_LIST": {
            const remainingBooks = state.readingList.filter(book => book.id !== action.payload);
            const newState = {
                ...state,
                readingList: remainingBooks
            }
            
            return newState;
        }

        case "ADD_TO_FINISHED_LIST": {
            const finishedBook = state.discoveredList.find(book => book.id === action.payload.id);
            const readingBooks = state.readingList.filter(book => book.id !== action.payload.id);
            const newState = {
                ...state,
                readingList: readingBooks,
                finishedList: [...state.finishedList, finishedBook],
            }
            return newState;
        }

        default:
            return state;
    }
}

export default bookReducers;