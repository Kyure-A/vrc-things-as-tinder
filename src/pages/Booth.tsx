"use client";

import TinderCards, { TinderCardValue } from "@/shared/ui/TinderCards";

const testshouhin: Array<TinderCardValue> = [
    { title: "かわいい服", description: "かわいいよ", imageUrl: "https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/5058077/a18424fe-a56e-411a-9c47-27c56909593c_base_resized.jpg"},  
    { title: "かわいいいいいい服", description: "かわいいいいいいよ", imageUrl: "https://booth.pximg.net/ee3a7f91-fd48-4797-b534-d10bec8ac3b4/i/5479202/287ccfe1-7a91-4b7b-91a0-08e79df67812_base_resized.jpg"}
];

export default function Booth () {
    const onSwipe = () => {
        
    };

    const onCardLeftScreen = () => {
        
    };
    
    return (
        <>
          <TinderCards cards={testshouhin} />
        </>
    );
}
