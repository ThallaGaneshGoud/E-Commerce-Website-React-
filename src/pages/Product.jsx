import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3 text-center">
          <img
            className="img-fluid border rounded shadow"
            src={product.image}
            alt={product.title}
            width="300px"
            height="300px"
          />
        </div>
        <div className="col-md-6 col-md-6 py-5">
          <h6 className="text-uppercase text-muted">{product.category}</h6>
          <h2 className="fw-bold">{product.title}</h2>
          <p className="lead text-warning">
            {product.rating?.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="text-success my-3">${product.price}</h3>
          <p className="text-secondary">{product.description}</p>
          <button
            className="btn btn-outline-success px-4"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-success px-4 mx-2">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="my-4 py-4 d-flex gap-4 justify-content-center">
      {[1, 2, 3, 4].map((_, i) => (
        <Skeleton key={i} height={280} width={180} />
      ))}
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4 d-flex gap-4">
      {similarProducts.map((item) => (
        <div
          key={item.id}
          className="card text-center border-0 shadow-sm"
          style={{
            width: "180px",
            transition: "transform 0.3s ease",
            background: "#f9f9f9",
            borderRadius: "12px"
          }}
        >
          <img
            className="card-img-top p-3"
            src={item.image}
            alt="Card"
            height="160"
            style={{ objectFit: "contain" }}
          />
          <div className="card-body">
            <h6 className="card-title text-truncate">
              {item.title.substring(0, 30)}...
            </h6>
          </div>
          <div className="card-body d-flex flex-column gap-2">
            <Link
              to={`/product/${item.id}`}
              className="btn btn-sm btn-outline-primary"
            >
              Buy Now
            </Link>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => addProduct(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h3 className="text-center mb-4 text-success fw-semibold">
              You may also like
            </h3>
            <Marquee pauseOnHover pauseOnClick speed={40}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
