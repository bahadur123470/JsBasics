
const myGames = {
    "game1": "NFS",
    "game2": "GTA",
    "game3": "FIFA",
    "game4": "Mortal Kombat",
    "game5": "Call of Duty"
}
for (const game in myGames) {
    // console.log(`${game} is :- ${myGames[game]} `)
}

const languages = {
    "javascript": "JS",
    "Typescript": "TS",
    "python": "PY",
    "java": "JA",
    "c++": "CP",
    "c#": "CS",
}
for (const modes in languages) {
//    console.log(`${modes} is used as ${languages[modes]}`)
}

const programmingLanguages = ["JS", "TS", "PY", "CPP", "CS"]
for (const key in programmingLanguages) {
    console.log(programmingLanguages[key])
}