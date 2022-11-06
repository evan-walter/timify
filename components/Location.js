import { useState } from 'react'

export default function Location() {
  const [searchParams, setSearchParams] = useState('')

  return (
    <div>
      <input
        className='px-2 py-1'
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
      />
    </div>
  )
}
