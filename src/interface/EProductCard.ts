export interface EProductCard {
    title: string;
    productImg: string;
    discount: number;
    price: number;
    rePrice?: number;
    stars: number;
    numberStars: number;
    isSale?: boolean;
    isNew?: boolean;
}