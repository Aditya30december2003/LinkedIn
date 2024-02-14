import React , {useState , useEffect} from 'react'

const CurrentDate = () => {
    const [date , setDate] = useState(new Date())
  return (
    <div>
      <p>{date.toLocaleString()}</p>
    </div>
  )
}

export default CurrentDate
