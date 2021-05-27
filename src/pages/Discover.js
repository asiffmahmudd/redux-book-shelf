import React, { useEffect } from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { useSelector, useDispatch} from 'react-redux';
import { loadBooks } from '../Redux/Actions/bookActions';

const Discover = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(loadBooks()), [])
    const books = useSelector(state => {
        return state.books.discoveredList
    })
    return (
        <PageLayout>
            {
                books.map((book) => (<Book key={book._id} book={book}/>))
            }
        </PageLayout>
    );
};

export default Discover;