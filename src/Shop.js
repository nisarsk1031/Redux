import React from 'react'
// import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from './state'

const Shop = () => {
    // const amount = useSelector(state=>state.amount)
    const dispatch=useDispatch()
const amount =100

  return (
    <div>
        <h2>Deposit/Withdraw</h2>
        <button className='btn btn_primary mx-2' style={{background:"pink"}}
        onClick={()=>dispatch( actionCreators.withdrawMoney(amount)
            )
            
        }
    
       >-</button>
        Update Balance
        <button className='btn btn_primary mx-2' style={{background:"pink"}}
        onClick={()=>dispatch(actionCreators.depositMoney(amount))}
       >+</button>
    </div>
  )
} 

export default Shop