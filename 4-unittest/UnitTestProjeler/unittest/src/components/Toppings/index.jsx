import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Toppings = () => {

  const [toppingData, setToppingData] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3051/toppings').then((res) => setToppingData(res.data))
  }, [])

  // console.log('toping state', toppingData)

  const handleChange = (e, topping) => {

    e.target.checked ? setBasket([...basket, topping]) : setBasket(basket.filter((basket) => basket.name !== topping.name))

  }
  return (
    <div className='container'>

      <h1>Sos Çeşitler</h1>
      <p>Tanesi 3&#8378; </p>
      <h2>Soslar Ücreti:{basket.length * 3}&#8378;</h2>

      <div className='row gap-3 mt-4 '>
        {toppingData.map((topping, i) => {
          return (
            <div key={i} className='d-flex flex-column align-items-center ' style={{ width: '150px' }}>

              <img src={topping.imagePath} alt="" className='img-fluid' />
              <label className='text-nowrap' htmlFor={topping.name}>{topping.name}</label>
              <input type="checkbox"
                onChange={(e) => handleChange(e, topping)}
                className='form-check-input'
                id={topping.name}
              />

            </div>
          )
        })}
      </div>


    </div>
  )
}

export default Toppings