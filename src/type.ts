export type Rarity = "Ø" | "ØØ" | "ØØØ";

export interface SinnerID {
    sinner: string;
    idName: string;
    image: string;
    portrait: string;
    rarity: Rarity;
    quote?: string;
    skills?: Skill[];
    voiceline?: string;
}

export interface Skill {
    skillName: string;
    icon?: string;
    skillNum: string;
}