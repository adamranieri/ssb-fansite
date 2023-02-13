import React, { createContext, CSSProperties, Dispatch, SetStateAction, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter,  } from 'react-router-dom';
import { ArenasPage } from './components/arenas-page';
import { FighterDetails } from './components/fighter-details';
import { FightersPage } from './components/fighters-page';
import { HomePage } from './components/home-page';
import { NavBar } from './components/navbar';

//I want to have this style available throughout my applications
const style: React.CSSProperties = {color:"green"};
export type GlobalStyling = {
  style:React.CSSProperties
  setGlobalStyle: Dispatch<SetStateAction<CSSProperties>>
}

const stylingDefault: GlobalStyling ={
  style:{color:"red"},
  setGlobalStyle: () =>{

  }
}

export const styleContext = createContext(stylingDefault);


function App() {

  const [globalStyle,setGlobalStyle] = useState(style)

  return <>
  <h1>SSBU Fansite</h1>
  <BrowserRouter>

  <styleContext.Provider value={{style:globalStyle,setGlobalStyle:setGlobalStyle}}>

    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/fighters' element={<FightersPage/>}/>
      <Route path='/arenas' element={<ArenasPage/>}/>
      <Route path='/details/:name' element={<FighterDetails/>}/>
    </Routes>
  
  </styleContext.Provider>

  </BrowserRouter>
  </>
}

export default App;
