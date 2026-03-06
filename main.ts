basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    } else if (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (input.isGesture(Gesture.ScreenUp)) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
