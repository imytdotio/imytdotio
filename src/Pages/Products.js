import React, { useEffect, useState } from "react";
import { H1 } from "../Components/Components";

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
  // console.log(process.env)
  // console.log(process.env.REACT_APP_GUMROAD_ACCESSTOKEN)
  const [products, setProducts] = useState();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "_gumroad_app_session=cuSMOfU0HjKxtXBSI56jz4fuSlLD3qDOEi9THJTCeIPnlr1jX%2Bm04jRAyx6dVqqzL2EvGd1AW%2B%2BB6GUeMeJrKZ3iPqPLbW8kF1ByCb0FziNyWNBZxdpMy8uRqkX4xeHBqiS1hDxong%2Bl85AgCca20ewDbqb3ZYOqqhz2xzm4PvgZYAdPSekBygqBVJigK%2BOmwb8gze3uspKCOByZG34RkAsPBHofj7ZW5burs2yDHnzsH4V0QjgtKamV9E2%2BoActCB05NuF7zsNg6ROZw7YylgjWr%2Fy9--1rhU5h%2F5YEsRIPaf--SIe2T8x8FYzM0O9GwwyrWg%3D%3D; _gumroad_guid=338b536f-a9c6-4087-836b-ff6e6f8e9531; _mkra_stck=mysql%3A1672151245.1915936");


    var urlencoded = new URLSearchParams();
    urlencoded.append(
      "access_token",
      process.env.REACT_APP_GUMROAD_ACCESSTOKEN
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
        console.log(result)
        setProducts(JSON.parse(result).products);
      })
      .catch((error) => console.log("error", error));
  }, []);
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
