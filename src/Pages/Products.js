import React, { useEffect, useState } from "react";
import { Container, H1 } from "../Components/Components";

/**
 * @author
 * @function Products
 **/

export const Products = (props) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "_gumroad_app_session=3GgskA3GZP8ZcMpMzxHKJ8Oz6BKRu7k2Iau472ICnUoc%2Bq%2BJG8SaY9A267uo%2FxveRAjH%2BeZIpQQpUHIaiXK%2FDPE6kuSwUoujqgKfUO5v4ntq0I9vTuIl4yWFWjtUHvsAAAm1VMke7vDC0rkW5qXkgT7purLAbSxmjaHinov7Zp111vqHpLE3duP8FE%2Ftd%2B66oln68OzdQwdYYyO8jpGYGpX%2BL3CQgCzN8vmDORG3EP%2F4qSALGqccQAWrpPsOD3%2BkAMGihcn8tUunHOzGPnQ9PAg7%2FKC1--wzm%2F%2B6TznCXn1I0u--T0Tut%2BNvMtt2UKH4FxUSNw%3D%3D; _gumroad_guid=338b536f-a9c6-4087-836b-ff6e6f8e9531"
    );

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
        setProducts(JSON.parse(result).products);
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // useEffect(() => console.log(products), [products]);

  const ProductBlock = (props) => {
    return (
      <div className="bg-white hover:bg-gray-300 border-2 border-white hover:border-gray-900 duration-100  p-4 max-w-prose flex rounded-xl shadow-md mb-4">
        <a href={props.href} className="text-black flex w-full" target="_blank">
          <img
            src={props.thumbnail}
            className="w-48 hidden md:block rounded-xl mr-8 object-cover"
          />
          <ul>
            <h1 className="font-bold">{props.title}</h1>
            <p className="text-gray-600 text-sm ml-2 italic mb-2">
              {props.price}
            </p>
            <p className="text-gray-600">{props.description}</p>
          </ul>
        </a>
      </div>
    );
  };
  return (
    <Container>
      <H1>📦 Products</H1>
      <ProductBlock
        title="Activity Ring"
        description="An editible activity ring to track your habit / progress."
        price="$15"
        thumbnail="https://public-files.gumroad.com/wm5qgdok7w6ohzav3jgy9zjxymeg"
        href="https://imyt.gumroad.com/l/ring"
      />
      <ProductBlock
        title="Planner"
        description="建立習慣最重要嘅就係「系統」，而我可以建立自學習慣、每日食健康早餐、飲 2L 水，全靠呢個我自己 design 嘅 planner。"
        price="$5"
        thumbnail="https://public-files.gumroad.com/variants/4yt59byjdtd33w5kmlv9wtq2rbfs/3298c3eb001bbed90f1d616da66708480096a0a1b6e81bd4f8a2d6e9b831d301"
        href="https://imyt.gumroad.com/l/planner"
      />
      <ProductBlock
        title="你都可以 05:00 起身"
        description="我每日都 05:00 起身，令我有時間自學 Programming、讀書、食豐富早餐。如果你都想 05:00 起身就可以睇我早起嘅 40 個方法。"
        price="$5+"
        thumbnail="https://public-files.gumroad.com/variants/he7vxm9msydehjhrbwlh73p6iqw6/f5218916c2116f8c5a1a4690a057d203a75a7abea3fc791723ba389b8a28d8ef"
        href="https://imyt.gumroad.com/l/5am"
      />
      <ProductBlock
        title="Instagram Guide"
        description=""
        price="$5+"
        thumbnail="https://public-files.gumroad.com/8vcnwj2oy1rv8yg9gavyczn0y2iv"
        href="https://imyt.gumroad.com/l/instagramguide"
      />
      <ProductBlock
        title="如何每日更新內容？"
        description="我每日都更新內容。我點做到？全部喺曬入面。"
        price="$69"
        thumbnail="https://public-files.gumroad.com/53ovs54wmikwtchmrmgsz4wcbwee"
        href="https://imyt.gumroad.com/l/prolific"
      />
    </Container>
  );
};
