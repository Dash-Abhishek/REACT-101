import React, { Component } from 'react'
import Products from './Products'

class Store extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Products></Products>
                    </div>
                    <div className="col-md-6">
                        preview
                    </div>
                </div>
            </div>
        )
    }



}

export default Store