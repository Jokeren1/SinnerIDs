import { yiSangIDs, faustIDs, donIDs, ryoshuIDs, meursaultIDs, hongLuIDs, heathcliffIDs, ishmaelIDs, rodionIDs, sinclairIDs, outisIDs, gregorIDs } from "./data.js";
const sinners = [
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
const sinnerGrid = document.getElementById("sinnerGrid");
function createSinnerCard(sinner) {
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
function loadMainMenu() {
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
