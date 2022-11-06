import { useState } from 'react'

export default function Location() {
  const [searchParams, setSearchParams] = useState('')

  return (
    <div>
      <input
        type='text'
        className='px-2 py-1'
        placeholder='Search'
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
      />
    </div>
  )
}
