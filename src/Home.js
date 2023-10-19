import { useState } from 'react';
import React from "react";
import './App.css'
import img2 from './image/book.jpg'
import img3 from './image/Emma.png'
import img4 from './image/demon.png'
import img5 from './image/tween.png'
import img6 from './image/ddd.png'
import Footer from './Footer';
import Book1 from './Book1';
import { Link, Navigate } from 'react-router-dom';
import Book2 from './Book2';
import Book4 from './Book4';
import Book3 from './Book3';
import { useNavigate } from 'react-router-dom';





function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
const navigate=useNavigate()
   
    return (
        <>
            <body>
                <nav>
                    <ul className='ulist'>
                    <li className='ilist'><a href='#home' className='alist'>Home</a></li>
                        <li className='ilist'><a href='#book' className='alist'>Books</a></li>
                        <li className='ilist'><a href='#foot' className='alist'>Foot</a></li>
                       
                    </ul>
                </nav>
                <p className='poo'>LIBRARY</p>
                <div className='dia' id='home'>
                    <div className='div0'>
                        <h1 className='h0'>"Books are the plane, and the train, and the road. They are the destination, and the journey. They are home."</h1>

                    </div>
                    <div className='div1'>

                        <img src={img2} className='img00'></img>

                    </div>
                </div>
                <div className='dib'></div>
                <div className='dic'>
                    <p className='p00'>A library</p> <p className='p001'>is a house of hope</p>
                    <p className='p002'>To Read Books Select from Given Below!!!!!!!!!</p>
                </div>
                <div className='did'></div>
                <div className='div2' id='book'>
                    <div className='die'>
                        <img src={img3} className='im0'></img>
                       <button className='b0001' onClick = {()=> navigate(`/book1`)}>
                            Read More
                        </button>
                    </div>
                    <div className='die'>
                        <img src={img4}  className='im0' />
                         <button className='b0001' onClick={()=>navigate(`/book2`)}>Read More</button>
                    </div>
                </div>
                <div className='div2'>
                    <div className='dif'>
                        <img src={img5} className='im0'></img>
                        <button className='b0001' onClick={()=>navigate(`/book3`)}>
                            Read More
                        </button>
                    </div>
                    <div className='dif'>
                        <img src={img6} className='im0' />
                         <button className='b0001' onClick={()=>navigate(`/book4`)}>Read More</button>
                    </div>
                </div>
            </body>
            <Footer/>
        </>
    );




}
export default Home;