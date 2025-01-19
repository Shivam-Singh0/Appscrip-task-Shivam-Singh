"use client";

import React, { useEffect, useState } from "react";
import { UseContext } from "../Context";
import styles from "./products.module.css"; // Import the CSS module
import Image from "next/image";
import Loader from "../loader/Loader";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { SetTotalProducts } = UseContext();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products", {
        cache: "no-cache",
      });
      const data = await res.json();
      setProducts(
        data.map((item) => ({
          ...item,
          stock: Math.random() > 0.5 ? 0 : 1, // Randomize stock for demo
          isNew: Math.random() > 0.7 && !item.stock, // Randomize "New Product" label for demo
          wishlisted: false,
        }))
      );
      SetTotalProducts(data.length);
      setLoading(false);
    };

    fetchProducts();
  }, [SetTotalProducts]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <div className={styles.gridContainer}>
      {products.map((item) => {
        const isOutOfStock = item.stock === 0;
        const isNewProduct = item.isNew;

        return (
          <div key={item.id} className={styles.card}>
            {isNewProduct && (
              <span className={styles.statusLabel}>New Product</span>
            )}
            {isOutOfStock && (
              <div className={styles.outOfStockOverlay}>Out of Stock</div>
            )}

            <Image
              src={item.image}
              width={200}
              height={250}
              className={styles.cardImage}
              alt={item.title}
              placeholder="blur"
              blurDataURL={item.image}
            />

            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{item.title}</h5>
              <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                <p className={styles.cardSecondaryText}> <Link style={{textDecoration: "underline"}} href={"#"}>Sign In</Link> or Create an account to see pricing</p>
                {item.wishlisted ? (
                  <FaHeart color="red" size={24} />
                ) : (
                  <CiHeart className={styles.heartIcon} size={24} onClick={() => setProducts((prevProducts) => prevProducts.map((product) => product.id === item.id ? { ...product, wishlisted: !product.wishlisted } : product))} />

                )}
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
