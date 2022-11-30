import React, { useEffect } from "react";

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
  return (
    <div className="w-full text-left px-8">
      <h1 className="text-6xl font-bold mb-8 mt-2">📦 Products</h1>
    </div>
  );
};
