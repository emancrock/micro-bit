led.enable(true)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        # # . # #
        . . . . .
        `)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
