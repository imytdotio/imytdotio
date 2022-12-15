import React, { useEffect, useState } from "react";
import { H1 } from "../Components/Components";
import config from "../config";

/**
 * @author
 * @function Products
 **/

const ProductBlock = (props) => {
  const shorten_description = `${props.description.substring(0, 99)} ...`;
  return (
    <a href={props.href} className="text-black" target="_blank">
      <div className="bg-white hover:bg-gray-300 border-2 border-white hover:border-gray-900 duration-100 p-8 lg:p-4 xl:w-1/2 flex rounded-xl shadow-md mb-4">
        <img
          src={props.thumbnail}
          className="w-48 hidden md:block rounded-xl mr-8 object-cover"
        />
        <ul>
          <h1 className="font-bold">{props.title}</h1>
          <p className="text-gray-600 text-sm ml-2 italic mb-2">
            {props.price} USD
          </p>
          <p dangerouslySetInnerHTML={{ __html: shorten_description }} />
        </ul>
      </div>
    </a>
  );
};

export const Products = (props) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "_gumroad_app_session=uGh36gDBu6fr5WbwrtZwyMmgo11G2pc8mY%2B6hNTpJg9uKaxDCBtJ8D%2FjxzUrFyZ9bLmkTXPmbLvnu5WaNPf4i3uUY5IW8v5W3GWmWMNciCwNKVLk3CHzOZHPD6CCjCtUwiOyK2kj1kef8L%2FaH7KWemxATcgFTft7HUnkFvDI4bR2n0G54SLrwhJn2yh%2FfWMCY6zbUT3fxU1lIQef11h1FWkNsuQMTab2heN6DZpZMj2RoDS786GSj6fiMqTQ75zqNmkR%2BQsc1N88kG3Mtf0LrTbhKPKg--TqODJ9izPooaAOBN--IYfBzYgsblJ3ymugzYli9g%3D%3D; _gumroad_guid=338b536f-a9c6-4087-836b-ff6e6f8e9531"
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append(
      "access_token",
      config.GUMROAD_ACCESSTOKEN
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: urlencoded,
      redirect: "follow",
    };

    fetch(`https://api.gumroad.com/v2/products?${urlencoded}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setProducts(JSON.parse(result).products);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => console.log(products), [products]);
  return (
    <div className="w-full text-left px-8">
      <H1>📦 Products</H1>
      {products &&
        products.map((product) => {
          return (
            <ProductBlock
              key={product.short_url}
              title={product.name}
              description={product.description}
              price={product.formatted_price}
              thumbnail={product.preview_url}
              href={product.short_url}
            />
          );
        })}
    </div>
  );
};
