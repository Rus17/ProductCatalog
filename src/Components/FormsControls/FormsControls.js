import React from 'react'
import './formsControls.css'

export const Input = ({input, meta, ...props}) => {
   return (
      <div className={meta.touched && meta.error ? "error" : ' '}>
         <input {...input} {...props} />
         {meta.touched && meta.error && <div>  {meta.error}</div>}
      </div>
   )
}

export const TextArea = ({input, meta, ...props}) => {
   return (
      <div className={meta.touched && meta.error ? "error" : ' '}>
         <textarea cols="70" rows="5" {...input} {...props} />
         {meta.touched && meta.error && <div>  {meta.error}</div>}
      </div>
   )
}
