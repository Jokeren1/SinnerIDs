import {
    yiSangIDs, faustIDs, donIDs, ryoshuIDs, meursaultIDs, hongLuIDs, 
    heathcliffIDs, ishmaelIDs, rodionIDs, sinclairIDs, outisIDs, gregorIDs
} from "./data.ts";
import { Rarity, SinnerID} from "./type.ts";

interface SinnerMenuData {
    name: string;
    portrait: string;
    ids: SinnerID[];
}

const sinners: SinnerMenuData[] = [
    {
        name: "Yi Sang",
        portrait: "IDs/YiSang/Portraits/LCB_Yi_Sang.jpg",
        ids: yiSangIDs
    },
];

const sinnerGrid = document.getElementById("sinnerGrid")! as HTMLDivElement;

function createSinnerCard(sinner: SinnerMenuData): HTMLDivElement {
    const card = document.createElement("div");
    card.className = "grid-item";

    const image = document.createElement("img");
    image.src = sinner.portrait;
    image.alt = sinner.name;

    const name = document.createElement("p");
    name.textContent = sinner.name;

    card.appendChild(image);
    card.appendChild(name);

    card.addEventListener("click", () => {
        console.log(`You clicked ${sinner.name}`);
        console.log(sinner.ids);
    });

    return card;
}

function loadMainMenu(): void {
    sinnerGrid.innerHTML = "";

    for (const sinner of sinners) {
        const card = createSinnerCard(sinner);
        sinnerGrid.appendChild(card);
    }
}

loadMainMenu();



/*function showIDMenu(): void {
    mainMenu.hidden = true;
    idMenu.hidden = false;
}

function showViewer(): void {
    idMenu.hidden = true;
    idViewer.hidden = false;
}
function backToMain(): void {
    idMenu.hidden = true;
    mainMenu.hidden = false;
}*/