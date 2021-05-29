export const loadBooks = () => {
    return (dispatch) => {
        fetch('https://redux-bookshelf.herokuapp.com/books')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "LOAD_BOOKS",
                payload: data
            })
        })
    }
}

export const loadReading = (user) => {
    return (dispatch) => {
        fetch(`https://redux-bookshelf.herokuapp.com/readingList/${user}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "LOAD_READING",
                payload: data
            })
        })
    }
}

export const loadFinished = (user) => {
    return (dispatch) => {
        fetch(`https://redux-bookshelf.herokuapp.com/finishedList/${user}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "LOAD_FINISHED",
                payload: data
            })
        })
    }
}

export const addToReadingList = (book, user) => {
    return (dispatch) => {
        fetch("https://redux-bookshelf.herokuapp.com/addToReadingList", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({book, user})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                dispatch({
                    type: 'ADD_TO_READING_LIST',
                    payload: book
                })
            }
        })
    }
}

export const removeFromReadingList = (id, user) => {
    return (dispatch) => {
        fetch(`https://redux-bookshelf.herokuapp.com/removeFromReading/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                dispatch({
                    type: 'REMOVE_FROM_READING_LIST',
                    payload: id,
                })
            }
            console.log(id,user)
        })
    }
}

export const addToFinishedList = (book, user) => {
    return (dispatch) => {
        fetch(`https://redux-bookshelf.herokuapp.com/removeFromReading/${book.id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({user})
        })

        fetch('https://redux-bookshelf.herokuapp.com/addToFinishedList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({book, user})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                dispatch({
                    type: 'ADD_TO_FINISHED_LIST',
                    payload: book,
                })
            }
        })
    } 
}