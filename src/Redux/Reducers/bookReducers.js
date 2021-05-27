import allBooks from "../../fakeData/books.json";

const initialState = {
    readingList: [],
    discoveredList: allBooks,
    finishedList: []
}

const bookReducers = (state = initialState, action) => {
    switch(action.type){
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
            const finishedBook = state.discoveredList.find(book => book.id === action.payload);
            const readingBooks = state.readingList.filter(book => book.id !== action.payload);
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