import axios from 'axios';
import React, { useState } from 'react'
import "../../assets/styles/addproducts.css";

const AddProducts = () => {

    let [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: "",
            count: "",
        },
    })



    let handleInput = (e) =>{

        let keyName = e.target.name
        let keyValue = e.target.value
        // console.log(e.target.name,e.target.value)

        if (keyName==="rate" || keyName==="count")
        {
            setNewProduct({
                ...newProduct,rating: {
                    ...newProduct.rating,
                    [keyName] : keyValue
                },
            });
        }
        else
        {
            setNewProduct({
            ...newProduct,
            [keyName] : keyValue
        });
        }
    };

    let handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(newProduct)

        window.confirm("Do you want to add this product?")
        if(bool){
            axios.post(`http://localhost:4000/products`,newProduct)
            alert('Product is Added')
            navigate(`/adminportal/products`)
        }
        else{
            alert('Product is Not Added')
        }


    };
  return (
    <>

    <div className="add-products">
        <h2>Add Products</h2>
        <div className="formbox">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Enter title'
                onChange={handleInput}
                name='title'
                value={newProduct.title}
                required
    
                />

                <input 
                type="number" 
                placeholder='Enter price'
                onChange={handleInput}
                name='price'
                value={newProduct.price}
                 required
                />

                <input 
                type="text" 
                placeholder='Enter description'
                onChange={handleInput}
                name='description'
                value={newProduct.description}
                required
                />

                <select
                onChange={handleInput}
                name="category"
                required
                >
                    <option value="">---Select Category---</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>

                </select>

                <input 
                type="text" 
                placeholder='Enter imageURL'
                onChange={handleInput}
                name='image'
                value={newProduct.image}
                 required
                />


                <input 
                type="number" 
                placeholder='Enter rate'
                onChange={handleInput}
                min='0' max='5'
                name='rate'
                value={newProduct.rating.rate}
                 required

                />

                

                <input 
                type="number" 
                placeholder='Enter count'
                onChange={handleInput}
                 min='0' max='5'
                name='count'
                value={newProduct.rating.count}
                 required
                />

                
                <button>
                    Add products
                </button>
            </form>
        </div>
    </div>

    </>
  )
}

export default AddProducts