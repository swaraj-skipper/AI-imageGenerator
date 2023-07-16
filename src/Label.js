import React from 'react'
// import { useState } from 'react';

export default function Label({label,setAttribute}) {
  return (
      <div>
          <label htmlFor="">{label}</label>
          <input onChange={(e) => setAttribute(e.target.value)} type="text" />
      </div>
  )
}
