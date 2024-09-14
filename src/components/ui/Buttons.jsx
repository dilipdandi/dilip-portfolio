import React from 'react'

const Buttons = ({children}) => {
  return (
    <button className='px-4 py-2 w-full rounded-sm text-activeColor hover:text-[#e3e3e3] border border-activeColor hover:border-[#e3e3e3] bg-[#44ff6036]'>{children}</button>
  )
}

export default Buttons
// rafce create auto function
// SHift+ALt+f => sett all data in format