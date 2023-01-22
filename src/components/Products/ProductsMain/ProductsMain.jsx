import ProductsCard from '../ProductsCard/ProductsCard'
import React, { useState, useEffect } from 'react';

const ProductsMain = () => {

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [filter, setFilter] = useState(1);
    const [ordered, setOrdered] = useState('');

    useEffect(() => {

        fetch('https://foxcoding.net/api/getProductsList')
            .then((response) => response.json())
            .then((data) => {
               
                setOrdered(products);
                setProducts(data.data.products)
                setAllProducts(data.data.products)

            });
           
    }, []);

    //FILTERS
    function clickCategory(category) {

        const filterProduct = allProducts.filter((product) => product.category.includes(category))
        setProducts(filterProduct)

    }

    //SIZES
    function clickSize(size) {
    console.log(allProducts);
        const sizeProduct = allProducts.filter((product) => {
            //função que retorna suas chaves
            const sizes = Object.keys(product.sizes)
            if (sizes.includes(size.toString())){
                return product
            }

        })

        setProducts(sizeProduct)
    }
   
    return (

        <main>
            <div id="headerproductlist">
                <div className="textoverlay">
                    <h1>Tops</h1>
                    <p>These awesome products</p>
                </div>
            </div>
            <div id="sortbar">
                <div className="gridrow">
                    <div className="col-4">Tops</div>
                    <div className="col-8 textright">Sort by
                        <select>
                            <option  value="Price" selected>Price</option>
                            <option value="Popularity">Popularity</option>
                            <option value="Name">Name</option>
                            <option value="Season">Season</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="gridrow">
                <div id="filters" className="col-12 col-t-4 col-d-3">
                    <p className="fancytext">Filters</p>
                    <ul className="categories">
                        <li className="open">
                            <a to="#" title="Tops">
                                Categories
                                <i className="icn-chevron-down"></i>
                                <i className="icn-chevron-up"></i>
                            </a>
                            <ul>
                                <li><a onClick={() => clickCategory(1)} to="#" title="snickers"><i className="icn-chevron-right"></i> snickers</a></li>
                                <li><a onClick={() => clickCategory(2)} to="#" title="coats"><i className="icn-chevron-right"></i> coats</a></li>
                                <li><a onClick={() => clickCategory(3)} to="#" title="pants"><i className="icn-chevron-right"></i> pants</a></li>
                                <li><a onClick={() => clickCategory(4)} to="#" title="jackets"><i className="icn-chevron-right"></i> jackets</a></li>
                            </ul>
                        </li>

                        {/* Fiz apenas um filtro pra ficar mais simples pra mim */}

                        {/*  <li>
                            <a to="#" title="Bottoms">
                                Bottoms
                                <i className="icn-chevron-down"></i>
                                <i className="icn-chevron-up"></i>
                            </a>
                            <ul>
                                <li><a to="#" title="Shorts"><i className="icn-chevron-right"></i> Shorts</a></li>
                                <li><a to="#" title="Trousers"><i className="icn-chevron-right"></i> Trousers</a></li>
                                <li><a to="#" title="Skirts"><i className="icn-chevron-right"></i> Skirts</a></li>
                            </ul>
                        </li>
                        <li>
                            <a to="#" title="Bags">
                                Bags
                                <i className="icn-chevron-down"></i>
                                <i className="icn-chevron-up"></i>
                            </a>
                            <ul>
                                <li><a to="#" title="Travel"><i className="icn-chevron-right"></i> Travel</a></li>
                                <li><a to="#" title="Work"><i className="icn-chevron-right"></i> Work</a></li>
                            </ul>
                        </li>
                        <li className="open">
                            <a to="#" title="Bags">
                                Shoes
                                <i className="icn-chevron-down"></i>
                                <i className="icn-chevron-up"></i>
                            </a>
                            <ul>
                                <li><a to="#" title="Sneakers"><i className="icn-chevron-right"></i> Sneakers</a></li>
                                <li><a to="#" title="Boots"><i className="icn-chevron-right"></i> Boots</a></li>
                                <li><a to="#" title="Flip-flops"><i className="icn-chevron-right"></i> Flip-flops</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <div className="sizes">
                        <p className="fancytext">- Sizes</p>
                        <div className="sizebtns marginverticalfourth">
                            <button type="button" onClick={() => clickSize(1)}>1</button>
                            <button type="button" onClick={() => clickSize(2)}>2</button>
                            <button type="button" onClick={() => clickSize(3)}>3</button>
                            <button type="button" onClick={() => clickSize(4)}>4</button>
                        </div>
                        <a to="#" title="View Size Guide" className="fancytext">See our sizing guide</a>
                    </div>
                </div>
                <div id="mainproductlist" className="product-list col-12 col-t-8 col-d-9 gridrowfull">

                    {
                        products.map((product) => {

                            return (
                                <ProductsCard key={product.id} product={product} />
                            )
                        })
                    }

                    <div className="central-link-light marginbottomdouble">
                        <a to="#" title="Load More"><i className="icn-reload"></i> Load More</a>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default ProductsMain