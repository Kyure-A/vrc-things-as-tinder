"use client";
import TinderCard from "react-tinder-card";
import CardLayout from "./CardLayout";
import { FloatingText, useFloatingEmojis } from "./FloatingEmoji";

export type TinderCardValue = {
    title: string;
    imageUrl: string;
    url: string;
    description: string;
};

type TinderCardsProps = {
    cards: Array<TinderCardValue>;
};

type SwipeDirection = "left" | "right" | "up" | "down";

export default function TinderCards (props: TinderCardsProps) {
    const Emoji = useFloatingEmojis(5000);
    
    const handleSwipe = (card: TinderCardValue, direction: SwipeDirection) => {
        if (direction === "right") Emoji.addItem("👍", "right");
        if (direction === "left") Emoji.addItem("👎", "left");
    }

    const handleCardLeftScreen = (card: TinderCardValue, direction: SwipeDirection) => {
        
    };
    
    return (
        <>
          <FloatingText items={Emoji.items} />
          {props.cards.map((c, index) => 
              <TinderCard
                  className="absolute"
                  key={index}
                  onSwipe={(dir) => handleSwipe(c, dir)}
                  onCardLeftScreen={(dir) => handleCardLeftScreen(c, dir)}>
                <CardLayout
                    imageUrl={c.imageUrl}
                    title={c.title}
                    description={c.description} />
              </TinderCard>
          )}
        </>
    );
}
