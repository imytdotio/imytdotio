import React, { useEffect } from "react";
import { H1 } from "../Components/Components";

/**
 * @author
 * @function Products
 **/

export const Products = (props) => {
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "_gumroad_app_session=qu94FJaueAmu8BeKe6J9nXzkYwDKnVRIA4QO3d7KHaCQib5Ldk3YxhW0KruNFw92B6afEF7sDizfCxOPG7XpmD6%2FYaj2k0%2B99%2BNcnJPpJTR%2Bur2B1firQTdJVKojmIqBOe9ic6E1WWOr9fUn3DVQfu9oidpBKnkiktwE55F7GQAiNm7Gr6lMLkNE3Zqnm%2BZab%2BgLNMNFKNeTosV5ay08L5ZzUZ%2BUAAmp8u1mHZdYg8FfJAgKzcZNd%2B1JzmGwB%2Ff2RA45ayhl4aVQ1%2BU7%2BhSe990R6AK%2F--PJTI0HbSt52J5S33--5kOqi6Eq9BRm%2B5mKgU9GYw%3D%3D; _gumroad_guid=338b536f-a9c6-4087-836b-ff6e6f8e9531; _mkra_stck=mysql%3A1669792114.899634"
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append(
      "access_token",
      "-UFgmqMkrEBqQAqNhZBuZAsj_8VdGIVig7Wg3Q0XkmY"
    );

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
  }, []);

  const ProductBlock = (props) => {
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
              {props.price}
            </p>
            <p className="text-gray-600">{props.description}</p>
          </ul>
        </div>
      </a>
    );
  };
  return (
    <div className="w-full text-left px-8">
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
    </div>
  );
};
