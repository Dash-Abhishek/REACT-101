import React from "react"
import classes from './Products.css'

const Products = (props) => {


    // console.log("loaded")
    return (

        <div className="container">
            <div className="row equal">

                {props.products.map((product) => (

                    <div key={product.itemId} className="col-sm-3 d-flex pb-3">
                        <button className="card-block mt-4 " onClick={props.productSelected.bind(null,{product})}>
                            <div className="card-body">
                                <img className="card-img-top" src={product.item.images.background} />
                                <h6 className="card-title">{product.item.name}</h6>
                                <p className="card-text"></p>
                            </div>
                        </button>
                    </div>
                ))}

            </div>

        </div>

    )
}


export default Products
