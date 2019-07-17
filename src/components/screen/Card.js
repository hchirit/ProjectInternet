import React  from 'react'
// import {
//     NavLink
// } from "react-router-dom";


const requireImage = chemin => {
    var parts = chemin.split('\\')
    var lastSegment = parts.pop() || parts.pop()
    try {
      return require(`../../img/uploadsImage/${lastSegment}`)
    } catch (err) {
      return require(`../../img/uploadsImage/default-img.jpg`)
    }
  }


        

const  Card = ({details , addPanier})  =>{

    return (
            <div className='card'>
                <br/>
                <div className='container'>
                    <img src={requireImage(details.image)} alt={details.name} width="400" height="300" />
                </div>
                <div className='recette'>

                    <h3>{details.name}</h3>
                    <ol className='liste-instruction'  >
                        brand  <strong>  {details.brand}</strong> <br />
                        cpu  <strong>    {details.cpu}</strong>  <br />
                        sizeScreen  <strong>    {details.sizeScreen} pouces</strong>  <br />
                        OperatingSystem  <strong>    {details.OperatingSystem} </strong> <br />
                        capacity  <strong>   {details.capacity} go</strong> <br />
                        MemorySize  <strong>    {details.MemorySize} go</strong> <br />
                    </ol>

                    <ul className='liste-agredients'>
                        <br />Price   [<strong> {details.price} $</strong> ]
                    </ul>
                    <button className='btn btn-outline-secondary btn-lg' onClick={() => addPanier(details._id)}>+ Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-outline-success btn-lg' onClick={() => addPanier(details._id,true)}> + Go Shopping cart</button><br/><br/>
                </div>

            </div>
            
        )
}


export default Card