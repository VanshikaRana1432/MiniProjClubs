//import React from 'react';
import './Main.css';
import {Intro} from './Intro';
import React, { useState } from "react";
import {Content} from "./Content";
import {BasicTable} from './BasicTable';

export const Main = () => {
    return (
        <div className="main">
          <div className="image"> 
            <Intro />
          </div> 
          {//<div className="content">
          }
          <div className="box">
            <Content/>
            <div className="cont">
              <div className="announce">
                <BasicTable/>
              </div>
              <br/>
              <div className="clubs">
                <BasicTable/>
              </div>
            </div>
          </div>
          </div>
        //</div>
      );
}



//material ui cmd
//