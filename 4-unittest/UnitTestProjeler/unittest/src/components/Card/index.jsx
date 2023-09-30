import React from 'react'

const Card = ({ scoop,basket,setBasket }) => {

  const { imagePath, name } = scoop
  const found=basket.filter((item)=>item.name ===name)
  const amount=found.length

  const handleReset=()=>{
    const clearBasket=basket.filter((item)=>item.name !==name)
    setBasket(clearBasket)
  }

  return (
    <div
      style={{ width: '150px' }}
      className='d-flex flex-column align-items-center'>

      <img alt='çeşit' src={imagePath}  className='img-fluid' />
      <label htmlFor="" className='lead'>{name}</label>

      <div className='d-flex gap-2 align-items-center'>
        <button className='btn btn-danger' onClick={()=>handleReset()}> Sıfırla</button>
        <span className='fs-2' >{amount}</span>
        <button className='btn btn-success' onClick={()=>setBasket([...basket,scoop])}>Ekle</button>
      </div>

    </div>
  )
}

export default Card