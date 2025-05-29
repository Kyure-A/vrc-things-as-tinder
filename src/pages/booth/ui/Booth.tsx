import TinderCards from "@/shared/ui/TinderCards";
import { use } from "react";
import { searchBooth } from "@/pages/booth/lib/fetcher";

const fetchProduct = async () => {
    const boothProduct = await searchBooth();

    return boothProduct.map((item) => {
        return {
            title: item.name? item.name : "error",
            description: item.shopDisplayName ? item.shopDisplayName : "error",
            imageUrl: item.thumbnailUrl ? item.thumbnailUrl : "error",
            url: item.url ? item.url : "/",
        };
    }).sort(() => Math.random() - 0.5);
};

export default function Booth () {
    const product = use(fetchProduct());
    
    return (
        <>
          <TinderCards cards={product} />
        </>
    );
}
