import { useEffect, useState } from "react";
import {fetchItems} from "../api";
import ShopItems from "./ShopItems";

const Home = ({category}) => {
  
  const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
      fetchItems(category).then(({ data }) => {
        setShopItems(data.items);
        });
        }, [category]);
      
      return (
        <section>
      <ul>
        {shopItems.map((item) => {
          return <ShopItems item={item} key={item.item_id} />;
        })}
      </ul>
    </section>
  );
};

export default Home;
