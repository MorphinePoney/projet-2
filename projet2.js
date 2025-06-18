const prompt = require("prompt-sync")()

let bonnereponse = 0
let demande = ""
let questionun = {
    sentence: "Quelle est la couleur du cheval blanc d'henry 4?",
    answer: ["A.Noire", "B.Rose", "C.Blanche", "D.la réponse D"],
    goodanswer: "C"
}
let questiondeux = {
    sentence: "Comment est la terre?",
    answer: ["A.Géoïde", "B.Ronde", "C.Plate", "D.La réponse D"],
    goodanswer: "A"
}
let questiontrois = {
    sentence: "Quelle est la quatrième lettre de l'alphabet?",
    answer: ["A.Z", "B.A", "C.P", "D.La réponseD"],
    goodanswer: "D"
}
let questionquatre = {
    sentence: "Par quelle lettre commence le mot dîner?",
    answer: ["A.Z", "B.A", "C.P", "D.La réponse D"],
    goodanswer: "D"
}
let questioncinq = {
    sentence: "Qui est le meilleur au ping pong chez RI7",
    answer: ["A.Brendan", "B.Thomas", "C.Marcela", "D.La réponse D"],
    goodanswer: "B"
}

let questions = [questionun, questiondeux, questiontrois, questionquatre, questioncinq]


for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].sentence)

    for (let a = 0; a < questions[i].answer.length; a++) {
        console.log(questions[i].answer[a]);
    }
    demande = prompt("Votre réponse")

    while (demande != "A" && demande != "B" && demande != "C" && demande != "D") {
        demande = prompt("Tu t'es trompé les réponses possibles sont A B C D")
    }
    if (demande == questions[i].goodanswer) {
        bonnereponse++
        console.log("Bonne réponse");
        
    }else{
        console.log("Mauvaise réponse");
        
    }

} console.log("Votre score est " + bonnereponse + "/"  + questions.length);











