import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdPage from '../components/AdPage'
import NotFound from './NotFound'

export default function Home () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
