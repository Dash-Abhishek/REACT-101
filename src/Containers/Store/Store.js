import React, { Component } from 'react'
import Products from './Products'
import Preview from './Preview'

class Store extends Component {

    state = {
        products: [],
        previewProduct:{},
        enablePreview: false
    }


    componentDidMount() {

        this.getproducts()

    }

    async getproducts() {

        const resp = await fetch('https://fortnite-api.theapinetwork.com/store/get', { headers: { Authorization: "74f075ada0b32aba1091ffcf4114bbc2" } })
            .catch((err) => {
                console.log("Error", err)
            })
        const jsonData = await resp.json()
        // console.log(jsonData)
        this.setState({ products: jsonData.data })
    }

    productSelectedHandler=(selectedProduct)=>{

        // console.log("Selected product",selectedProduct)
        this.setState({enablePreview:true,previewProduct:selectedProduct})


    }
    



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <Products products={this.state.products} productSelected={this.productSelectedHandler}></Products>
                    </div>
                    <div className="col-md-6 mt-5">
                        {this.state.enablePreview?(<Preview product={this.state.previewProduct.product}/>):(null)}
                    </div>
                </div>
            </div>
        )
    }



}

export default Store