import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            prod_id: this.props.match.params.id,
            prod_name: '',
            prod_price: '',
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.prod_id).then( (res) =>{
                let product = res.data;
                this.setState({prod_name: product.prod_name,
                    prod_price: product.prod_price,
                    
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {prod_name: this.state.prod_name, prod_price: this.state.prod_price};
        console.log('product => ' + JSON.stringify(product));
        console.log('prod_id => ' + JSON.stringify(this.state.prod_id));

        // step 5
        if(this.state.prod_id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.prod_id).then( res => {
                this.props.history.push('/products');
            });
        }
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

    getTitle(){
        if(this.state.prod_id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Product Name" name="prod_name" className="form-control" 
                                                value={this.state.prod_name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Product Price" name="prod_price" className="form-control" 
                                                value={this.state.prod_price} onChange={this.changepriceHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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

export default CreateProductComponent
