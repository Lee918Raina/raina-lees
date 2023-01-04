input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 A C5 A B G B G ", 200)
    music.playMelody("A F A F G E G E ", 200)
    music.playMelody("F D F D E C E C ", 200)
    music.playMelody("D D C D C - - - ", 200)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.soundLevel())
})
basic.showLeds(`
    . # . # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
