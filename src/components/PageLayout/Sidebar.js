import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';
const Sidebar = () => {

  const readingNumber = useSelector(state => {
    return state.books.readingList.length
  })
  const finishedNumber = useSelector(state => {
    return state.books.finishedList.length
  })
  
  return (
    <div className='col-md-3'>
      <ul className='list-group sticky-top  py-2'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{readingNumber}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>{finishedNumber}</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
