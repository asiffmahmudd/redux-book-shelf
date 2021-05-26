export const addToReadingList = (book) => {
    return {
        type: ADD_TO_READING_LIST,
        payload: book
    }
}

export const removeFromReadingList = (book) => {
    return {
        type: REMOVE_FROM_READING_LIST,
    }
}