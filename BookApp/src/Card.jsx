import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import App from './App.jsx'
import styled from 'styled-components'



function Card({book}){
  const navigate = useNavigate();
  // console.log(book.covers[0])
  // console.log(`https://covers.openlibrary.org/b/id/OL20842226W.jpg`)
  return(<div onClick={() => {
      navigate(`/olid/${book.key.slice(7)}`)
      }}>
  <h3>{book.title}</h3>
  <img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}/>
  </div>)
}



export default Card