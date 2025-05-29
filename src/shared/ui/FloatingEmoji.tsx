import React, { useState, useCallback } from 'react';

interface FloatingEmoji {
    id: string | number;
    text: string;
    x: number;
    y: number;
}

interface FloatingTextProps {
    items: FloatingEmoji[];
    duration?: number;
}

interface UseFloatingEmojisReturn {
    items: FloatingEmoji[];
    addItem: (text: string) => void;
    clearItems: () => void;
}

const FloatingText: React.FC<FloatingTextProps> = ({ items, duration = 4000 }) => {
    return (
        <>
          {items.map((item) => (
              <div
                  key={item.id}
                  className="absolute text-4xl pointer-events-none"
                  style={{
                      left: `${item.x}%`,
                      bottom: `${item.y}%`,
                      animation: `floatUpFade ${duration}ms ease-out forwards`,
                  }}
              >
                {item.text}
              </div>
          ))}
          
          <style jsx>{`
        @keyframes floatUpFade {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0.9;
          }
          10% {
            transform: translateY(-30px) scale(1);
            opacity: 1;
          }
          25% {
            transform: translateY(-80px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateY(-200px) scale(1);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-350px) scale(0.9);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-500px) scale(0.7);
            opacity: 0;
          }
        }
              `}</style>
        </>
    );
};

const useFloatingEmojis = (duration: number = 5000): UseFloatingEmojisReturn => {
    const [items, setItems] = useState<FloatingEmoji[]>([]);
    
    const addItem = useCallback((text: string, position: "left" | "center" | "right" = "center"): void => {
        const posX = position === "center" ? Math.random() * 80 + 10 :
                     (position === "left" ? Math.random() * 40 + 5 :
                      Math.random() * 40 + 55); // right
        
        const newItem: FloatingEmoji = {
            id: Date.now() + Math.random(),
            text,
            x: posX,
            y: 0,  // 画面の一番下から開始
        };
        
        setItems(prev => [...prev, newItem]);
        setTimeout(() => {
            setItems(prev => prev.filter(item => item.id !== newItem.id));
        }, duration);
    }, [duration]);

    const clearItems = useCallback((): void => {
        setItems([]);
    }, []);

    return { items, addItem, clearItems };
};

export { FloatingText, useFloatingEmojis };
export type { FloatingEmoji, FloatingTextProps, UseFloatingEmojisReturn };
