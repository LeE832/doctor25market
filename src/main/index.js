import React from 'react';
import './index.css'
import axios from "axios";

function MainPage(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(function(){
        axios
        .get('https://c5e97394-23be-4401-9cd5-b2e8d98ffce6.mock.pstmn.io/products')
        .then(function(result){        
            const products = result.data.products;
            setProducts(products);
        })
        .catch(function(error){
            console.error('에러 발생 : ', error);
        });
    },[]);    
    return (
      <div>
        <div id="header">
            <div id="header-area">
                <img src="images/icons/doctor25-logo.png" />
            </div>    
        </div>
        <div id="body">
            <div id="banner">
                <img src="images/banners/doctor25-banner.png"/>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function(product, index){
                        return (
                            <div className="product-card">
                                <div>
                                    <img className="product-img" src={product.imageUrl}/>
                                </div>
                            <div className="product-contents">
                                <span className="product-name">
                                    {product.name}
                                </span>
                                <span className="product-price">
                                    {product.price}원
                                </span>
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/icons/small-logo.png"/>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div> 
        <div id="footer"></div>
      </div>
    );
}

export default MainPage;