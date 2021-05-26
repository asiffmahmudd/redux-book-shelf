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
            const newState = {
                ...state,
                readingList: [state.readingList.filter(book => book.id !== action.payload)]
            }
            return newState;
        }

        default:
            return state;
    }
}

export default bookReducers;