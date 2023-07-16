import React from 'react'
// import { useState } from 'react';

export default function Label({label,setAttribute}) {
  return (
      <div>
          <input className='inp' placeholder='Explore your imagination' onChange={(e) => setAttribute(e.target.value)} type="text" />
      </div>
  )
}
