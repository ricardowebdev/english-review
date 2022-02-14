class Dashboard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.words = [
            {
                english: "father",
                portuguese: "pai"
            },
            {
                english: "mother",
                portuguese: "mãe"
            },
            {
                english: "daugther",
                portuguese: "filha"
            },
            {
                english: "son",
                portuguese: "filho"
            },
            {
                english: "grandmother",
                portuguese: "avó"
            },
            {
                english: "grandfather",
                portuguese: "avô"
            },
            {
                english: "uncle",
                portuguese: "tio"
            },
            {
                english: "aunt",
                portuguese: "tia"
            },
            {
                english: "cousin",
                portuguese: "primo"
            },
            {
                english: "brother",
                portuguese: "irmão"
            },
            {
                english: "sister",
                portuguese: "irmã"
            },
            {
                english: "good morning",
                portuguese: "bom dia"
            },
            {
                english: "good afternoon",
                portuguese: "boa tarde"
            },
            {
                english: "good evening",
                portuguese: "boa tarde"
            },
            {
                english: "good night",
                portuguese: "boa noite"
            },
            {
                english: "dog",
                portuguese: "cachorro"
            },
            {
                english: "fish",
                portuguese: "peixe"
            },
            {
                english: "cat",
                portuguese: "gato"
            },
            {
                english: "bird",
                portuguese: "pássaro"
            },
            {
                english: "turtle",
                portuguese: "tartaruga"
            },
            {
                english: "blue",
                portuguese: "azul"
            },
            {
                english: "yellow",
                portuguese: "amarelo"
            },
            {
                english: "green",
                portuguese: "verde"
            },
            {
                english: "red",
                portuguese: "vermelho"
            },
            {
                english: "white",
                portuguese: "branco"
            },
            {
                english: "black",
                portuguese: "preto"
            },
            {
                english: "gray",
                portuguese: "cinza"
            },        
            {
                english: "pink",
                portuguese: "rosa"
            },
            {
                english: "orange",
                portuguese: "laranja"
            },        
            {
                english: "purple",
                portuguese: "roxo"
            },
            {
                english: "brown",
                portuguese: "marrom"
            },
            {
                english: "rainbow",
                portuguese: "arco íris"
            },
            {
                english: "and",
                portuguese: "e"
            },
            {
                english: "to have",
                portuguese: "ter"
            },
            {
                english: "book",
                portuguese: "livro"
            },
            {
                english: "notebook",
                portuguese: "caderno"
            },
            {
                english: "eraser",
                portuguese: "borracha"
            },
            {
                english: "pen",
                portuguese: "caneta"
            },
            {
                english: "bag",
                portuguese: "mochila"
            },
            {
                english: "ruller",
                portuguese: "régua"
            },
            {
                english: "pencil",
                portuguese: "lápis"
            },
            {
                english: "pencil case",
                portuguese: "estojo"
            },
            {
                english: "cisor",
                portuguese: "tesoura"
            },
        ]
        
        this.sortedWords = this.sortWords(this.words);           
    }

    static get observedAttributes() {
        return [];    
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let html =  '<div class="container m-10 text-left wrap center row">';

        this.sortedWords.map((word) => {
            html += `
                <div class="place m-5 mr-15 pt-5">
                    <review-card response="" answer="" english="${word.english}" portuguese="${word.portuguese}" />
                </div>
            `
        });

        this.shadow.innerHTML = `
            <link href="index.css" rel="stylesheet" type="text/css">
            ${html}
            </div>
        `;
    }

    randomIndex(max) {
        return Math.round(Math.random() * (max - 1) + 1);
    }

    sortWords(words) {
        const max = words.length;
        let sorteds = [];
        const sortedWords = [];
    
        while (sorteds.length < 15) {
            const sorted = this.randomIndex(max);
            if (sorteds.indexOf(sorted) < 0) {
                sorteds.push(sorted);
                sortedWords.push(words[sorted - 1]);
            }
        }
        
        return sortedWords;
    }

}

customElements.define("review-dashboard", Dashboard);