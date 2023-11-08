import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Celebrity from './pages/Celebrity'
import Home from './pages/Home'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'
import Tv from './pages/Tv'

const RootWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`

function App () {
  return (
    <RootWrap>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RootWrap>
  )
}

export default App
