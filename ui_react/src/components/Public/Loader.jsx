import React from 'react'

function Loader() {
  return (
    <div className='flex flex-row justify-center items-center'>
      <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
  Processing...
</button>
    </div>
  )
}

export default Loader