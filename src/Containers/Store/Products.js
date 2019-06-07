import React, { Component } from "react"

class Products extends Component {



    state = {
        products: []
    }


    async getproducts() {

        const resp = await fetch('https://fortnite-api.theapinetwork.com/store/get', { headers: { Authorization: "74f075ada0b32aba1091ffcf4114bbc2" } })
            .catch((err) => {
                console.log("Error", err)
            })
        const jsonData = await resp.json()
        console.log(jsonData)
        this.setState({ products: jsonData.data })
    }

    componentDidMount() {

        this.getproducts()

    }


    render() {
        return (

            <div className="container">
                <div className="row  mt-4">

                    {this.state.products.map((product) => (

                        <div key={product.itemId} className="col-sm-3">
                            <button className="card mt-4">
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


}


export default Products
