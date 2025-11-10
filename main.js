// const playerName = prompt("Skriv ditt namn: ")
const playerName = "Jens" // statiskt så vi slipper prompt varje körning
let playerHp = 100
let enemyHp = 100

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

const playButton = document.querySelector("#play-button")
const playerHpElement = document.querySelector("#player-hp")
const enemyHpElement = document.querySelector("#enemy-hp")

const combatLogElement = document.querySelector("#combat-log")

function log(message, type) {
    const li = document.createElement("li")
    if (type) {
        li - classlist.add(type)
        li.textContent = message
        combatLogElement.appendChild(li)
        if (combatLogElement.childNodes.length > 10) {
            combatLogElement.removeChild(combatLogElement.firstChild)
        }
    }
}


const Eenemy = {
    "name": "Zio",
    "hp": 40
}
function gameRound() {
    const playerRoll = rollDice()
    const enemyRoll = rollDice()
    if (playerRoll > enemyRoll) {
        const damage = playerRoll - enemyRoll
        log(`Du köttar fienden för ${damage}!`)
        enemyHp -= damage
    } else if (enemyRoll > playerRoll) {
        const damage = enemyRoll - playerRoll
        log(`Nedrans, du blir mulad för ${damage}!`)
        playerHp -= damage
    } else {
        log("Snyggt parerat, inget händer!")
    }

    if (playerHp < 1 || enemyHp < 1) {
        playButton.disabled = true
    } else if (playerHp < 30) [
        playerHpElement.classList.add("low-hp")
    ]

    playerHpElement.textContent = playerHp < 1 ? 0 : playerHp
    enemyHpElement.textContent = enemyHp < 1 ? 0 : enemyHp
}
playerHpElement.textContent = playerHp
enemyHpElement.textContent = enemyHp
playButton.addEventListener("click", gameRound)

log(`Spelet startar! Du möter fienden ${enemy.name}!`, "start")