export type Rarity = "Ø" | "ØØ" | "ØØØ";

export interface SinnerID {
    sinner: string;
    idName: string;
    image: string;
    portrait: string;
    rarity: Rarity;
}