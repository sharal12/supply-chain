import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prod_id: this.props.match.params.id,
            prod_name: '',
            prod_price: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
       this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.prod_id).then( (res) =>{
            let product = res.data;
            this.setState({prod_name: product.prod_name,
                prod_price: product.prod_price,
                
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {prod_name: this.state.prod_name, prod_price: this.state.prod_price};
        console.log('product => ' + JSON.stringify(product));
        console.log('prod_id => ' + JSON.stringify(this.state.prod_id));
        ProductService.updateProduct(product, this.state.prod_id).then( res => {
            this.props.history.push('/products');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({prod_name: event.target.value});
    }

    changepriceHandler= (event) => {
        this.setState({prod_price: event.target.value});
    }

  

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="prod_name" className="form-control" 
                                                value={this.state.prod_name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Product Price" name="prod_price" className="form-control" 
                                                value={this.state.prod_price} onChange={this.changepriceHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductComponent
