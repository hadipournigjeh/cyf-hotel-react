import React, { useState } from 'react'
import CustomerProfile from './CustomerProfile';

function SingleBooking(props) {

  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected)
  }
  return (
<>
    <tr style={{backgroundColor:selected? "lightgray": "white"}} onClick={handleClick}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{props.nights}</td>
      <button class="btn-show" onClick={props.clickHandle}>Show profile</button>
    </tr>
    
</>
  )
}

export default SingleBooking