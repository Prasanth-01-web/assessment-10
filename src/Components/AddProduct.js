import React, { useState } from 'react'

export default function AddProduct(props) {

    const[products, setProducts] = useState({ProductName: ""})
    const[Brand,setBrand] = useState({Brand:""})
    const[Quantity,setQuantity] = useState({Quantity: ""})
    const[Price,setPrice] = useState({Price: ""})
    const[Actions,setActions] = useState({Actions: ""})


    // Write Your Code Here

    function handleProductNameChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eleProductName = e.target.ProductName;
        console.log(eleProductName);
        setProducts({ ...products, [eleProductName]: e.target.value })
        
    }

    function handleBrandChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eleBrand = e.target.Brand;
        console.log(eleBrand);
        setBrand({ ...Brand, [eleBrand]: e.target.value })
    }

    function handleQuantityChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eleQuantity = e.target.Quantity;
        console.log(eleQuantity);
        setQuantity({ ...Quantity, [eleQuantity]: e.target.value })
    }

    function handlePriceChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var elePrice = e.target.Price;
        console.log(elePrice);
        setPrice({ ...Price, [elePrice]: e.target.value })
    }

    function handleActionsChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eleActions = e.target.Actions;
        console.log(eleActions);
        setActions({ ...Actions, [eleActions]: e.target.value })
    }

    function handleFormSubmit(e) {
        // Write Your Code Here
        e.preventDefault();
        props.saveProducts(products)
        setProducts({
            ProductName: "" , 
            Brand: "", 
            Quantity: "", 
            Price: "", 
            Actions: ""
        })
    }

    return (
        <div>
            {/* Write Your Code Here */}
            <input className='ProductName' placeholder='ProductName' value={products.ProductName} onChange={handleProductNameChange}></input>
            <input className='Brand' placeholder='Brand' value={products.Brand} onChange={handleBrandChange}></input>
            <input className='Quantity' placeholder='Quantity' value={products.Quantity} onChange={ handleQuantityChange}></input>
            <input className='Price' placeholder='Price' value={products.Price} onChange={handlePriceChange}></input>
            <input className='Actions' placeholder='Actions' value={products.Actions} onChange={handleActionsChange}></input>
            <button onClick={handleFormSubmit}>Save</button>
        </div>
    )
}
