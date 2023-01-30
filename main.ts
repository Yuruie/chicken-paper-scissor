function Rps () {
    OLED.clear()
    OLED.writeStringNewLine("Player1" + Player1)
    OLED.newLine()
    OLED.writeStringNewLine("player2 " + Player2)
    OLED.newLine()
    OLED.writeStringNewLine("rounds " + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
}
let Ties = 0
let Player2 = 0
let Player1 = 0
let Rounds = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Shall We Play A Game")
Rounds = 0
Player1 = 0
Player2 = 0
Ties = 0
basic.pause(2000)
OLED.clear()
Rps()
