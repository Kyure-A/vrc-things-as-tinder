type BoothProduct =  {
    id: string | null;
    name: string | null;
    price: string | null;
    shopName: string | null;
    shopDisplayName: string | null;
    category: string | null;
    url: string | null;
    thumbnailUrl: string | null;
}

const CATEGORY_MAP: Record<string, string> = {
    "208": "3Dキャラクター",
    "209": "3D衣装",
    "210": "3D小道具",
    "215": "3Dツール・システム",
    "216": "3Dモーション・アニメーション"
};

function normalizeWhitespace(text: string | null): string {
    return text ? text.replace(/\s+/g, ' ').trim() : '';
}

function extractProductInfo(html: string): BoothProduct[] {
    const itemCardPattern = /<li\s+class="item-card.+?<\/li>/gs;
    const itemCards = html.match(itemCardPattern) || [];
    
    const products: BoothProduct[] = itemCards.map(cardHtml => {
        const idMatch = cardHtml.match(/data-product-id="([^"]+)"/);
        const nameMatch = cardHtml.match(/data-product-name="([^"]+)"/);
        const priceMatch = cardHtml.match(/data-product-price="([^"]+)"/);
        const brandMatch = cardHtml.match(/data-product-brand="([^"]+)"/);
        const categoryMatch = cardHtml.match(/data-product-category="([^"]+)"/);

        const urlMatch = cardHtml.match(/href="(https:\/\/booth\.pm\/ja\/items\/[^"]+)"/);

        const thumbnailMatch = cardHtml.match(/data-original="([^"]+)"/);

        const shopDisplayNameMatch = cardHtml.match(/<div class="item-card__shop-name">([^<]+)<\/div>/);

        const product: BoothProduct = {
            id: idMatch ? idMatch[1] : null,
            name: nameMatch ? nameMatch[1] : null,
            price: priceMatch ? priceMatch[1] : null,
            shopName: brandMatch ? brandMatch[1] : null,
            shopDisplayName: shopDisplayNameMatch ? normalizeWhitespace(shopDisplayNameMatch[1]) : null,
            category: categoryMatch ? categoryMatch[1] : null,
            url: urlMatch ? urlMatch[1] : null,
            thumbnailUrl: thumbnailMatch ? thumbnailMatch[1] : null
        };

        if (product.category && CATEGORY_MAP[product.category]) {
            (product as any).categoryName = CATEGORY_MAP[product.category];
        }
        
        return product;
    });
    
    return products;
}


export const searchBooth = async () => {
    const response = await fetch("https://booth.pm/ja/items?tags[]=VRChat&sort=new", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },       
    })

    return extractProductInfo(await response.text());
}
