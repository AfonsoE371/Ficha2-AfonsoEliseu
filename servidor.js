const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h4>Pães de pão<h4>");
        res.end("<h1>Bom dia<h1>");
        return;
    }

    else if (req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h3>Afonso Eliseu<h3>");
        res.end("<h3>TGPSI24-T<h3>");
        return;
    }

    else if (req.url === "/agora") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const now = new Date().toLocaleString("pt-PT");
        res.end(`${now}`);
        return;
    }
    else if (req.url === "/cartas") {
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
        return;
    }
    else{

       res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
       res.end(`<h1>404 - Página não encontrada<h1>
                <p>O endereço que procuraste não existe.<p>`);
        return;
    }});




server.listen(PORT, () => {
    console.log(`Server a correr em http://localhost:${PORT}`);
});