"use client";

import TinderCard from "react-tinder-card";
import CardLayout from "./CardLayout";

export type TinderCardValue = {
    title: string;
    imageUrl: string;
    description: string;
};

type TinderCardsProps = {
    cards: Array<TinderCardValue>;
};

type SwipeDirection = "left" | "right" | "up" | "down";

export default function TinderCards (props: TinderCardsProps) {
    const handleSwipe = (card: TinderCardValue, direction: SwipeDirection) => {
        
    }

    const handleCardLeftScreen = (card: TinderCardValue, direction: SwipeDirection) => {
        
    };
    
    return (
        <>
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
