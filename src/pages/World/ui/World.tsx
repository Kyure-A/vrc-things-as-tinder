import TinderCards from "@/shared/ui/TinderCards";
import { use } from "react";
import { searchVRCListWorld } from "../lib/fetcher";

const fetchWorlds = async () => {
    const worlds = await searchVRCListWorld();
    return worlds.sort(() => Math.random() - 0.5);
};

export default function World () {
    const worlds = use(fetchWorlds());
    
    const onSwipe = () => {
        
    };

    const onCardLeftScreen = () => {
        
    };
    
    return (
        <>
          <TinderCards cards={worlds} />
        </>
    );
}
