function generate(){
    let quotes = {
        "- Ana Julia 1": '"Eu sou linda"',
        "- Ana Julia 2": '"É inexplicável a pureza do olhar e de palavras de uma criança"',
        "- Vinicius Mendes 1": '"A Naju não é linda, não se engane por essa cobra"',
        "- Vinicius Mendes 2": '"Amar é enganar para tentar enxergar a si no coração de outra pessoa, se enganar em atrocidades feitas pela pessoa e venerá-la"'
    };
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random()  * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}