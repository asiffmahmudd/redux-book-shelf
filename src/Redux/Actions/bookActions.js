
export const loadBooks = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: "LOAD_BOOKS",
                payload: data
            })
        })
    }
}

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