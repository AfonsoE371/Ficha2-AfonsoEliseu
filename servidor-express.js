const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h4>Pães de pão com manteiga e fiambre<h4>");
    res.end("<h1>Bom dia<h1>");
});

app.get("/sobre", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h3>Afonso Eliseu<h3>");
    res.end("<h3>TGPSI24-T<h3>");
});

app.get("/agora", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const now = new Date().toLocaleString("pt-PT");
    res.end(`${now}`);
});

app.get("/cartas", (req, res) => {
 const cards = [
            { name: "Blue-Eyes White Dragon", type: "Dragon", attribute: "Light", attack: "3000", defense: "2500" },
            { name: "Dark Magician", type: "Spellcaster", attribute: "Dark", attack: "2500", defense: "2100" },
            { name: "Mementoal Tecuhtlica - Combined Creation", type: "Wyrm", attribute: "Earth", attack: "5000", defense: "5000" },
            { name: "Merciless Scorpion of Serket", type: "Fairy", attribute: "Earth", attack: "2500", defense: "2000" },
            { name: "Hollowdevour Xenovader △ Jahannam", type: "Psychic", attribute: "Dark", attack: "3000", defense: "2400" }
        ]
        const items = cards.map(card => `<li>${card.name}</li>\n`).join("");
        const card = cards[Math.floor(Math.random()* cards.length)];
        res.write(`${items}`);
        res.write(`${card.name}, ${card.type},${card.attack},${card.defense}`);
        res.end(`${cards.length}`);
});

app.use((req, res) => {
    res.status(404).send("<h1>404</h1>");
    res.end(`<h1>404 - Página não encontrada<h1>
                <p>O endereço que procuraste não existe.<p>`);
});

app.listen(3000, () => console.log("http://localhost:3000"));