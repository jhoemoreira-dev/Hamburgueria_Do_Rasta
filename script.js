const artesanais = [
    {
        nome: "Rasta Burguer",
        descricao: "Pão || Hamburguer Artesanal 100g || Queijo Coalho || Alface || Tomate || Cebola Caramelizada || Molho da Casa",
        preco: "R$ 15,00"
    },
    {
        nome: "Rasta Duplo",
        descricao: "Pão || Hamburguer Artesanal 100g || 4 Fatias Queijo Coalho || 4 Fatias de Bacon || Alface || Tomate || Cebola Caramelizada || Molho da Casa",
        preco: "R$ 35,00"
    },
    {
        nome: "Rasta Bacon",
        descricao: "Pão || Hamburguer Artesanal 100g || Queijo Coalho || Bacon Crocante || Alface || Tomate || Cebola Caramelizada || Molho da Casa",
        preco: "R$ 25,00"
    },
    {
        nome: "Rasta Cheddar",
        descricao: "Pão || Hamburguer Artesanal 100g || Queijo Cheddar Cremoso || Alface || Tomate || Cebola Caramelizada",
        preco: "R$ 20,00"
    }
];

const industrializados = [
    {
        nome: "Clássico",
        descricao: "Pão || Hambúrguer Industrializado || Queijo Mussarela || Alface  || Tomate || Cebola Caramelizada || Maionese Caseira",
        preco: "R$ 12,00"
    },
    {
        nome: "Egg Burguer",
        descricao: "Pão || Hambúrguer Industrializado || Ovo || Queijo Mussarela || Alface || Tomate || Cebola Caramelizada || Maionese Caseira",
        preco: "R$ 14,00"
    },
    {
        nome: "Calabresa",
        descricao: "Pão || Hambúrguer Industrializado || Queijo Mussarela || Calabresa || Ovo || Alface || Tomate || Cebola Caramelizada || Maionese Caseira",
        preco: "R$ 18,00"
    },
    {
        nome: "Fator Burguer",
        descricao: "Pão || Hambúrguer Industrializado || Queijo Mussarela || Ovo || Salsicha || Bacon || Alface  || Tomate || Cebola Caramelizada || Maionese Caseira",
        preco: "R$ 20,00"

    },
    {
        nome: "Mata Fome",
        descricao: "Pão || Hambúrguer Industrializado || 2 Fatias de Queijo Mussarela || 2 Ovos || 2 Salsichas || 4 Fatias de Bacon || 6 Calabresas || Alface  || Tomate || Cebola Caramelizada || Maionese Caseira",
        preco: "R$ 30,00"
    }
];

const batatafrita = [
    {
        nome: "Batata Tradicional (100G)",
        descricao: "Queijo Ralado || Ketchup || Mostarda e Maionese",
        preco: "R$ 10,00"
    },
    {
        nome: "Batata com Cheddar",
        descricao: "Queijo Ralado || Queijo Cheddar",
        preco: "R$ 12,00"
    },
    {
        nome: "Batata com Cheddar e Bacon",
        descricao: "Queijo Ralado || Queijo Cheddar || Bacon",
        preco: "R$ 15,00"
    }
];

const hotdogs = [
    {
        nome: "Tradicional",
        descricao: "Pão || Salsicha || Vinagrete || Batata Palha || Milho e Ervilha || Queijo Ralado",
        preco: "R$ 10,00"
    },
    {
        nome: "Bacon",
        descricao: "Pão || Salsicha || Bacon || Vinagrete || Batata Palha || Milho e Ervilha || Queijo Ralado || Queijo Cheddar",
        preco: "R$ 13,00"
    }
];

const bebidas = [
    {
        nome: "Guaraná Lata",
        descricao: "Refrigerante 350ml",
        preco: "R$ 5,00"
    },
    {
        nome: "Guaraná 1 Litro",
        descricao: "Refrigerante 1L",
        preco: "R$ 8,00"
    },
    {
        nome: "Guaraná 2 Litros",
        descricao: "Refrigerante 2L",
        preco: "R$ 10,00"
    },
    {
        nome: "Coca Lata",
        descricao: "Refrigerante 350ml",
        preco: "R$ 5,00"
    },
    {
        nome: "Coca-Cola 1 Litro",
        descricao: "Refrigerante 1L",
        preco: "R$ 9,00"
    },
    {
        nome: "Coca-Cola 2 Litros",
        descricao: "Refrigerante 2L",
        preco: "R$ 13,00"
    },
    
];


let menu = document.getElementById("menu");

artesanais.forEach(artesanal => {
    menu.innerHTML += `
        <div class="card">
            <h3>🍔 ${artesanal.nome}</h3>
            <p>${artesanal.descricao}</p>
            <strong>${artesanal.preco}</strong>
            <button onclick="pedir('${artesanal.nome}')">Pedir</button>
        </div>
    `;
});

let industrialDiv = document.getElementById("industrializados");

industrializados.forEach(industrializado => {
    industrialDiv.innerHTML += `
        <div class="card">
            <h3>🍔 ${industrializado.nome}</h3>
            <p>${industrializado.descricao}</p>
            <strong>${industrializado.preco}</strong>
            <button onclick="pedir('${industrializado.nome}')">Pedir</button>
        </div>
    `;
});

let batataDiv = document.getElementById("batatas");

batatafrita.forEach(batata => {
    batataDiv.innerHTML += `
        <div class="card">
            <h3>🍟 ${batata.nome}</h3>
            <p>${batata.descricao}</p>
            <strong>${batata.preco}</strong>
            <button onclick="pedir('${batata.nome}')">Pedir</button>
        </div>
    `;
});

let hotdogDiv = document.getElementById("hotdogs");

hotdogs.forEach(hotdog => {
    hotdogDiv.innerHTML += `
        <div class="card">
            <h3>🌭 ${hotdog.nome}</h3>
            <p>${hotdog.descricao}</p>
            <strong>${hotdog.preco}</strong>
            <button onclick="pedir('${hotdog.nome}')">Pedir</button>
        </div>
    `;
});

let bebidaDiv = document.getElementById("bebidas");

bebidas.forEach(bebida => {
    bebidaDiv.innerHTML += `
        <div class="card">
            <h3>🥤 ${bebida.nome}</h3>
            <p>${bebida.descricao}</p>
            <strong>${bebida.preco}</strong>
            <button onclick="pedir('${bebida.nome}')">Pedir</button>
        </div>
    `;
});


function pedir(nome){
    let numero = "5581999999999"; // coloque seu número aqui
    let mensagem = `Olá, quero pedir o ${nome}`;
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
