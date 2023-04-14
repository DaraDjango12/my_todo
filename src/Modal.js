import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='bg-slate-200 fixed inset-x-0 inset-y-0 flex justify-center items-center'>
        {children}


    </div>
  )
}

export default Modal