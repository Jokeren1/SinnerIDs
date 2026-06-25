export type Rarity = "Ø" | "ØØ" | "ØØØ";

export interface SinnerID {
    sinner: string;
    idName: string;
    image: string;
    portrait: string;
    rarity: Rarity;
    quote?: string; // Remove ? once finalized quotes for all IDs are added
    skills?: Skill[]; // Remove ? once finalized skills for all IDs are added
    voiceline?: string; // Remove ? once finalized voicelines for all IDs are added
}

export interface Skill {
    skillName: string;
    icon: string;
    skillNum: string;
}