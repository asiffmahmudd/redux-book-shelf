import React, { useEffect, useState } from "react";
import { 
  HiPlusCircle, 
  HiMinusCircle,
  HiCheckCircle, 
} from 'react-icons/hi';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import styles from './book.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { addToReadingList, addToFinishedList, removeFromReadingList } from "../../Redux/Actions/bookActions";

const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis } = props.book;
  const dispatch = useDispatch()
  const [addedInReading, setAddedInReading] = useState(false);
  const [addedInFinished, setAddedInFinished] = useState(false);

  const readingBooks = useSelector(state => {
    return state.books.readingList;
  })

  const finishedBooks = useSelector(state => {
    return state.books.finishedList;
  })

  const addBook = () => {
    dispatch(addToReadingList(props.book));
    setAddedInReading(true)
  }
  
  const removeBook = () => {
    dispatch(removeFromReadingList(props.book._id));
    setAddedInReading(false)
  }

  const addToFinished = () => {
    dispatch(addToFinishedList(props.book._id))
    setAddedInFinished(true)
  }

  useEffect(() => {
    const existsInReading = readingBooks.find(book => book._id === props.book._id)
    const existsInFinished = finishedBooks.find(book => book._id === props.book._id)
    if(existsInReading){
      setAddedInReading(true)
    }
    if(existsInFinished){
      setAddedInFinished(true)
    }
  }, [])

  return (
    <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        {
          addedInFinished &&
          <IoCheckmarkDoneCircleOutline title="Finished" className={styles.check_icon}  />
        }
        {
          !addedInFinished && addedInReading 
          &&
          <HiMinusCircle title="Remove from list" className={styles.minus_icon} onClick={removeBook}  />
        }
        {
          !addedInFinished && !addedInReading 
          &&
          <HiPlusCircle title="Add to Reading" className={styles.plus_icon} onClick={addBook}  />
        }
        
        {
          !addedInFinished &&
          <HiCheckCircle title="Mark as Finish" className={styles.check_icon} onClick={addToFinished}  />
        }
      </div>
    </div>
  );
};

export default SingleBook;
