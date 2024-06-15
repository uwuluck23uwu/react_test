import React, {useState} from 'react'

export default function AppKey() {
const data = [
    {id:1, name: "Product01"},
    {id:2, name: "Product02"},
    {id:3, name: "Product03"},
    {id:4, name: "Product04"},
    {id:5, name: "Product05"}
]
const [product, setProduct] = useState(data)
const deleteData = (id) => {
  setProduct(product.filter((item) => item.id != id))
}

  return (
    <div>
        {product.map((item, index) => {
            return (
            <div key={index} className='m-2'>
              ID : {item.id}
              Name : {item.name}
              <button onClick={() => deleteData(item.id)} className='btn btn-dark m-2'>Delete</button>
            </div>
            )
        })}
    </div>
  );
}
