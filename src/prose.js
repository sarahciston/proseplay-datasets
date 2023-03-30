import { ProsePlay} from "proseplay"

let doc1 = `this is the (hello|world)
here is another (line|moment->turnGrey|question->turnBlue)`;

let doc2 = 'here is another text';

let docs = [doc1, doc2]

// ProsePlay.parse(doc2);

const containers = document.querySelectorAll('.text')
containers.forEach((container, i) => {
    const pp = new ProsePlay(container)
    pp.parse(docs[i])
})

// const pp = new ProsePlay(containers)
// pp.classList.add('.proseplay-plaintext')
// pp.parse(doc1)

function turnGrey() {
    document.body.classList.remove("blue");
    document.body.classList.add("grey");
}

function turnBlue() {
    document.body.classList.remove("grey");
    document.body.classList.add("blue");
}

pp.setFunction("turnGrey", turnGrey);
pp.setFunction("turnBlue", turnBlue);
