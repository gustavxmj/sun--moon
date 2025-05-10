let low = 0
let threshold = 0
let high = 0
let light2 = 0
input.onButtonPressed(Button.A, function () {
    low = pins.analogReadPin(AnalogPin.P0)
    threshold = (high + low) / 2
})
input.onButtonPressed(Button.B, function () {
    high = pins.analogReadPin(AnalogPin.P0)
    threshold = (high + low) / 2
})
basic.forever(function () {
    light2 = pins.analogReadPin(AnalogPin.P0)
    if (light2 > threshold) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # .
            . # # # .
            # # # . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
