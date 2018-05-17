class RockPaperScissors {
    constructor(containerElement) {
        /* ... costruisco i vari componenti che
           devono interagire */
        this.mainElement = document.createElement('div');
        //add ui container classes
        this.mainElement.classList.add("ui", "container", "grid", "centered");
        const title = document.createElement('h2');
        title.classList.add("ui", "header");
        title.textContent = "Your Game";
        const button = document.createElement('button');
        button.classList.add("ui", "button");
        button.textContent = "Play!";

        const row = document.createElement('div');
        const column = document.createElement('div');
        column.classList.add("three", "wide", "column", "centered");
        row.classList.add("row");
        column.append(title);
        row.append(column);
        this.mainElement.append(row);
        
        const columni= document.createElement('div');
        columni.classList.add("three", "wide","column", "centerd");

        this.labels = [ "Rock", "Paper", "Scissors" ];
        for (let i = 0; i < 3; i++) {

            const rowi = document.createElement('div');
            
            
            rowi.classList.add("row");
            const radioButton = document.createElement('input');
            radioButton.setAttribute('type', 'radio');
            radioButton.setAttribute('name', 'choice');
            radioButton.setAttribute('value', this.labels[i]);
            const label = document.createElement('i');
            label.classList.add("ui", "image", "label", "hand", this.labels[i].toLowerCase(), "icon", "huge");
            label.textContent = " " + this.labels[i];

            rowi.append(radioButton);
            rowi.append(label);
            columni.append(rowi);
            
            //this.mainElement.append(radioButton);
            //this.mainElement.append(label);
            //this.mainElement.append(document.createElement('br'));
        }
        this.mainElement.append(columni);
        //this.mainElement.append(button);
        const rowf = document.createElement('div');
        rowf.classList.add("row");
        rowf.append(button);
        columni.append(rowf);

        button.addEventListener('click', this.buttonPressed.bind(this));
        this.result = document.createElement('div');
        this.mainElement.append(this.result);
        containerElement.append(this.mainElement);
    }
    randomDraw() {
        const v = Math.floor(3 * Math.random());
        this.opponentChoice = this.labels[v];
    }
    determineWinner(choice) {
        if (this.opponentChoice == "Rock") {
            switch (choice) {
            case "Rock": return "tie";            
            case "Paper": return "you";
            case "Scissors": return "opponent";
            }
        }
        else if (this.opponentChoice == "Paper") {
            switch (choice) {
            case "Rock": return "opponent";            
            case "Paper": return "tie";
            case "Scissors": return "you";
            }
        }
        else {
            // this.opponentChoice == "Scissors"
            switch (choice) {
            case "Rock": return "you";            
            case "Paper": return "opponent";
            case "Scissors": return "tie";
            }
        }
    }
    buttonPressed(event) {
        this.randomDraw();
        this.result.textContent = this.opponentChoice;
        const myChoice = this.mainElement.querySelector('input[name="choice"]:checked');
        if (!myChoice)
            /* Transform the window.alert into a semantic-ui alert */
            window.alert("You must choose one option");
        else {
            /* determine a winner */
            const winner = this.determineWinner(myChoice.value);
        }
    }
}

export default RockPaperScissors;