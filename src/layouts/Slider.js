import React from 'react';
import '../styles/Slider.css'

const Slider = () => {
  return (<div className="wrapSlider">
    {/* <a href="https://pl.freepik.com/zdjecia/kobieta">Kobieta zdjęcie utworzone przez cookie_studio - pl.freepik.com</a> */}
    {/* <a href='https://pl.freepik.com/zdjecia/ludzie'>Ludzie zdjęcie utworzone przez Racool_studio - pl.freepik.com</a> */}
    {/* <a href='https://pl.freepik.com/zdjecia/reka'>Ręka zdjęcie utworzone przez Racool_studio - pl.freepik.com</a> */}
    <img className="sliderPhoto1" src={require('../images/beautiful-brunette-with-clean-face-removebg-preview.png')} alt="sliderphoto1" />
    <h1 className="text1Photo1">Mezoterapia igłowa</h1>
    <h2 className="text2Photo1">należy do nieinwazyjnych zabiegów kosmetologii estetycznej. Jej celem jest nawilżenie, odżywienie i regeneracja skóry na wybranym obszarze ciała. Polega na wstrzyknięciu składników aktywnych do skóry właściwej.</h2>
    <img className="sliderPhoto2" src={require('../images/charming-relaxed-gentle-young-woman-making-cosmetological-procedure-applying-facial-cream-face-with-fingers-smiling-broadly-feeling-perfect-taking-care-skin-removebg-preview.png')} alt="liderphoto2" />
    <img className="sliderPhoto3" src={require('../images/cute-girl-with-beautiful-face-removebg-preview (1).png')} alt="liderphoto3" />

  </div>)
  const h1 = document.querySelector('.text1Photo1');
  const h2 = document.querySelector('.text2Photo1');
  const sliderPhoto1 = document.querySelector('.sliderPhoto1');
  const sliderPhoto2 = document.querySelector('.sliderPhoto2');
  const sliderPhoto3 = document.querySelector('.sliderPhoto3');



}
export default Slider;