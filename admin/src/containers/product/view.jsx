import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { getSingleproduct } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';
import './style.css';

/**
* @author
* @function EditProduct
**/

export const ViewProduct = (props) => {
    const dispatch = useDispatch();
    const [productPictures, setProductPictures] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [longdescription, setLongdescription] = useState('');
    const [status, setStatus] = useState('');
    const [price, setPrice] = useState('');
    const [oldprice, setOldPrice] = useState('');
    const [youtubeurl, setYoutubeurl] = useState('');
    const [procategory, setProcategory] = useState('');
    const { category } = useSelector((state) => state.listcategory);
    const { product } = useSelector((state) => state.getproduct);

    // handl image 

    const productId = props.match.params.id;
 


    // GET EDIT DATA CODE START
    useEffect(() => {
        if (product && product._id !== productId) {
            dispatch(getSingleproduct(productId));
        } else {
            setProductPictures(product.productPictures)
            setOldPrice(product.oldprice)
            setPrice(product.price)
            setProductName(product.name);
            setQuantity(product.quantity);
            setProcategory(product.category.name);
            setLongdescription(product.description);
            setStatus(product.status);
            setYoutubeurl(product.youtubeurl)
        }

    }, [ product]);

    
        if (youtubeurl && youtubeurl !=='undefined') {
            
        }
    

    return (
        <Layout>
            
            <div className="container">
                <div className="card-wrapper mt-5">
                    <div className="card">
                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                    <img className="productListImg" src={gernateImages(productPictures)} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="product-content">
                            <h2 className="product-title">{productName}</h2>
                            <a href="#" className="product-link">{procategory}</a>
                            <div className="product-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-alt"></i>
                                <span>4.7(21)</span>
                            </div>
                            <div className="product-price">
                                <p className="last-price">Old Price: <span>₹ {oldprice}</span></p>
                                <p className="new-price">New Price: <span>₹ {price}</span></p>
                            </div>
                            <div className="product-detail">
                                <h2>about this item: </h2>
                                <p>{longdescription}</p>
                                 {/* <ul>
                                    <li>Color: <span>Black</span></li>
                                    <li>Available: <span>in stock</span></li>
                                    <li>Category: <span>Shoes</span></li>
                                    <li>Shipping Area: <span>All over the world</span></li>
                                    <li>Shipping Fee: <span>Free</span></li>
                                </ul> */}
                            </div>
                            <div className="purchase-info">
                                <input type="number" min="0" value={quantity} />
                                <button type="button" className="btn">
                                    Add to Cart <i className="fa fa-shopping-cart"></i>
                                </button>
                               
                                {/* <button type="button" className="btn">Compare</button> */}
                            </div>
                            {/* <div className="social-links">
                                <p>Share At: </p>
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
