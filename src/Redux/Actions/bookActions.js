export const addToReadingList = (book) => {
    return {
        type: 'ADD_TO_READING_LIST',
        payload: book
    }
}

export const removeFromReadingList = (id) => {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload: id,
    }
}

export const addToFinishedList = (id) => {
    return {
        type: 'ADD_TO_FINISHED_LIST',
        payload: id,
    }
}