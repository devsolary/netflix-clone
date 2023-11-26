import React from 'react';
import './HomeScreen.css';
import NavBar from './NavBar.js';
import Banner from './Banner.js';
import Row from './Row.js';
import requests from './request.js';
import Footer from './Footer.js';

function HomeScreen() {
  return (
    <div className='HomeScreen'>
      {/* navBar */}
      <NavBar />
    

      {/* banner */}
      <Banner />

      {/* row */}
      <Row title = 'NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals}isLargeRow />
      <Row title = 'TOP RATED' fetchUrl = {requests.fetchTopRated}/>
      <Row title = 'ACTION MOVIES' fetchUrl = {requests.fetchActionMovies}/>
      <Row title = 'COMEDY MOVIES' fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = 'HORROR MOVIES' fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = 'ROMANCE MOVIES' fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = 'DOCUMENTRIES' fetchUrl = {requests.fetchDocumentaries}/>
      <Footer />
    </div>
  );
}

export default HomeScreen;