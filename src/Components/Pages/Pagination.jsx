import React from 'react'
import { useApiData } from '../../utils/Context'

const Pagination = () => {
    const {page , nbPages , getnextPage, getprevPage} =useApiData()
  return (
    <>
    <div className="pagination">
        <div className="content flex items-center justify-center gap-5 p-3">
        <button onClick={() =>getprevPage()} className='px-5 py-2 bg-black text-white rounded-md'>Prev</button>
        <span>{page + 1 } of {nbPages}</span>
        <button onClick={() =>getnextPage()} className='px-5 py-2 bg-black text-white rounded-md'>Next</button>
        </div>
    </div>
    </>
  )
}

export default Pagination