import React from 'react';
import './Intro.css';
import SportImg from '../images/SportImg.png';

export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
                <span>Welcome to the</span>
                <span>Sports Club</span>{/*yeh 1*/}
                <span>Be part of the action, sweat it out, and make lifelong friendships at our college sports club. Get in the game and let's make magic happen!</span>{/*yeh 2*/}
        </div>
        <div className="i-right">
            <img src={SportImg} width={"350px"} height={"300px"}/>{/*yeh 3*/}
        </div>
    </div>
  )
}
