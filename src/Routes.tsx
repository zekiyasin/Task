import React from 'react'
import { Route, Routes as Rotalar } from 'react-router-dom'

const Routes = () => {
  return (
    <div>
        <Rotalar>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/hizmetler/bots" element={<div>Bots</div>} />
            <Route path="/hizmetler/sentiment" element={<div>Sentiment</div>} />
        </Rotalar>
    </div>
  )
}

export default Routes