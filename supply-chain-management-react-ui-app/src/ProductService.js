import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/products";

class ProductService {

    
    getProducts(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createProduct(prod_id){
        return axios.post(EMPLOYEE_API_BASE_URL, prod_id);
    }

    getProductById(prod_id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + prod_id);
    }

    updateProduct(product, prod_id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + prod_id, product);
    }

    deleteProduct(prod_id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + prod_id);
    }
}

export default new ProductService()