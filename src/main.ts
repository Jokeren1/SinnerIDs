import {
    yiSangIDs, faustIDs, donIDs, ryoshuIDs, meursaultIDs, hongLuIDs, 
    heathcliffIDs, ishmaelIDs, rodionIDs, sinclairIDs, outisIDs, gregorIDs
} from "./data.js";
import { Rarity, SinnerID} from "./type.js";

interface SinnerMenuData {
    name: string;
    portrait: string;
    ids: SinnerID[];
}


const sinners: SinnerMenuData[] = [
    { name: "Yi Sang", portrait: "IDs/YiSang/Portraits/LCB_Yi_Sang.jpg", ids: yiSangIDs },
    { name: "Faust", portrait: "IDs/Faust/Portraits/LCB_Faust.jpg", ids: faustIDs },
    { name: "Don Quixote", portrait: "IDs/Don/Portraits/LCB_Don.jpg", ids: donIDs },
    { name: "Ryoshu", portrait: "IDs/Ryoshu/Portraits/LCB_Ryoshu.jpg", ids: ryoshuIDs },
    { name: "Meursault", portrait: "IDs/Meursault/Portraits/LCB_Meursault.jpg", ids: meursaultIDs },
    { name: "Hong Lu", portrait: "IDs/HongLu/Portraits/LCB_HongLu.jpg", ids: hongLuIDs },
    { name: "Heathcliff", portrait: "IDs/Heathcliff/Portraits/LCB_Heathcliff.jpg", ids: heathcliffIDs },
    { name: "Ishmael", portrait: "IDs/Ishmael/Portraits/LCB_Ishmael.jpg", ids: ishmaelIDs },
    { name: "Rodion", portrait: "IDs/Rodion/Portraits/LCB_Rodion.jpg", ids: rodionIDs },
    { name: "Sinclair", portrait: "IDs/Sinclair/Portraits/LCB_Sinclair.jpg", ids: sinclairIDs },
    { name: "Outis", portrait: "IDs/Outis/Portraits/LCB_Outis.jpg", ids: outisIDs },
    { name: "Gregor", portrait: "IDs/Gregor/Portraits/LCB_Gregor.jpg", ids: gregorIDs }
];

const sinnerGrid = document.getElementById("sinnerGrid")! as HTMLDivElement;
const mainMenu = document.getElementById("mainMenu")! as HTMLDivElement;
const idMenu = document.getElementById("idMenu")! as HTMLDivElement;
const idViewer = document.getElementById("idViewer")! as HTMLDivElement;
const selectedSinnerName = document.getElementById("selectedSinnerName")! as HTMLHeadingElement;
const idGrid = document.getElementById("idGrid")! as HTMLDivElement;
const backToMainButton = document.getElementById("backButton")! as HTMLButtonElement;
const backToIDMenuButton = document.getElementById("backButton2")! as HTMLButtonElement;
const equippedIDPortrait = document.createElement("img");
const equippedIDName = document.createElement("p");

backToMainButton.addEventListener("click", () => {
    idMenu.hidden = true;
    mainMenu.hidden = false;
});

backToIDMenuButton.addEventListener("click", () => {
    idViewer.hidden = true;
    idMenu.hidden = false;
});

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
        openIDMenu(sinner);
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

function openIDMenu(sinner: SinnerMenuData): void {
    console.log(`Opening ID menu for ${sinner.name}`);
    mainMenu.hidden = true;
    idMenu.hidden = false;

    selectedSinnerName.textContent = sinner.name;

    idGrid.innerHTML = "";

    const equippedID = sinner.ids[0];
    if (!equippedID) {
        return;
    }
    equippedIDPortrait.src = equippedID.portrait;
    equippedIDName.textContent = equippedID.idName;

    for (const id of sinner.ids) {
        const card = document.createElement("div");
        card.className = "id-card";

        const image = document.createElement("img");
        image.src = id.portrait;

        card.appendChild(image);
        card.addEventListener("click", () => {
            console.log(`Viewing details for ID: ${id.idName}`);
            equippedIDPortrait.src = id.portrait;
            equippedIDName.textContent = id.idName;
            viewIDDetails(id);
        });

        idGrid.appendChild(card);
    }
}

function viewIDDetails(id: SinnerID): void {
    mainMenu.hidden = true;
    idMenu.hidden = true;
    idViewer.hidden = false;

    const fullArt = document.getElementById("FullArt")! as HTMLImageElement;
    fullArt.src = id.image;
    fullArt.alt = id.idName;

    
}