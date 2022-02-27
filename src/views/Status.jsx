import React, {useState} from 'react'
import Category from '../components/Category/Category';
import './Styles.css'
import Spinner from '../components/Spinner/Spinner'

const Status = () => {
  const [isLoading, setIsLoading] = useState (true)

    setTimeout(()=>{
    setIsLoading(false)
  }, 1000)


  return (
    <div>
      <div className='statusCont'>
        {isLoading ? <Spinner className="spin"/> : <Category/>}
      </div>

    </div>
  )
}

export default Status;
