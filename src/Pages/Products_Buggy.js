import React, { useEffect, useState } from "react";
import BuyOn from "../Components/BuyOn";
import config from "../config";
/**
 * @author
 * @function Products
 **/

export const Products = (props) => {
  var GUMROAD_BEARER = config.GUMROAD_BEARER;
  var GUMROAD_COOKIE = config.GUMROAD_COOKIE;
  var GUMROAD_ACCESSTOKEN = config.GUMROAD_ACCESSTOKEN;

  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    setIsPending(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", GUMROAD_COOKIE);

    var urlencoded = new URLSearchParams();
    urlencoded.append("access_token", GUMROAD_ACCESSTOKEN);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://api.gumroad.com/v2/products", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setIsPending(false);
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div>
      <h1 className="text-6xl font-bold mb-8 mt-2">📦 Products</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mb-4">
        {isPending && <p>Loading...</p>}
        {products &&
          products.map((product) => {
            return (
              <BuyOn
                key={product.id}
                href={product.short_url}
                title={product.name}
                description={product.description}
                thumbnail_url={product.thumbnail_url}
              />
            );
          })}
      </div>
    </div>
  );
};
