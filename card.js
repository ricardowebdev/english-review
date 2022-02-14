class Card extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    get response() {
        return this.getAttribute("response");
    }

    set response(val) {
        this.setAttribute("response", val);
    }

    get answer() {
        return this.getAttribute("answer");
    }

    set answer(val) {
        this.setAttribute("answer", val);
    }

    get english() {
        return this.getAttribute("english");
    }

    set english(val) {
        this.setAttribute("english", val);
    }
    
    get portuguese() {
        return this.getAttribute("portuguese");
    }

    set portuguese(val) {
        this.setAttribute("portuguese", val);
    }

    static get observedAttributes() {
        return ["response", "classResponse"];
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let disabled = '';
        let showPortuguese = '';
        let classResponse = 'bold fc-danger';

        if (this.response !== null &&  this.response !== "") {
            disabled = 'disabled readonly';
            showPortuguese = this.portuguese;
        }

        if (this.response === 'Right') {
            classResponse = 'bold fc-result';
        }

        this.shadow.innerHTML = `
            <link href="index.css" rel="stylesheet" type="text/css">            
            <div class="container column">
                <div class="item p-5">
                    <span class="fs-18 fc-danger bold">${this.english}</span>
                </div>

                <div class="item p-5">
                    <input type="text" placeholder="Write the word in portuguese" class="input" id="answer" ${disabled} value="${this.answer}" />
                </div>

                <div class="item p-5">
                    <span class="bold fc-primary" id="result">Answer: ${showPortuguese}</span>
                </div>

                <div class="item p-5">
                    <span id="correct" class="${classResponse}">${this.response}</span>
                </div>


                <div class="item p-5 text-end">
                    <button class="btn" id="correct_btn" ${disabled}>Confirm</button>
                </div>
            </div>
        `;

        let btn = this.shadow.getElementById("correct_btn");
        btn.addEventListener("click", this.correct.bind(this));
    }

    correct() {
        const answer = this.shadow.getElementById('answer');
        const btn = this.shadow.getElementById("correct_btn");
        const result = this.shadow.getElementById("result");

        if (answer.value) {
            this.disableElements([answer, btn]);
            result.innerHTML = this.portuguese;

            this.answer   = answer.value.toLowerCase();


            this.response = this.portuguese.toLowerCase().trim() === answer.value.toLowerCase().trim()
                ?  'Right'
                :  'Wrong';
            

            setTotal(this.response);
        }
    }

    disableElements(elements) {
        if (typeof(elements) === 'object' && elements.length !== undefined) {
            elements.forEach(element => {
                element.setAttribute('readonly', true);
                element.setAttribute('disabled', true);            
            });
        } else {
            elements.setAttribute('readonly', true);
            elements.setAttribute('disabled', true);
        }
    
    }
}

customElements.define("review-card", Card);