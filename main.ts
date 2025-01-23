
let stripe: neopixel.Strip = neopixel.create(DigitalPin.P8, 24, NeoPixelMode.RGB)
let logoispressed: boolean = false
let min: number = 0
let max: number = 99
let impnumber: number = 0
let rotspeed: number = 0

stripe.showRainbow(5)

while (true) {
    stripe.rotate(1)
    stripe.show()
    basic.pause(25)


    if (input.buttonIsPressed(Button.B) && rotspeed <= max) {
        rotspeed += 1
        impnumber += 1

    }

    if (input.buttonIsPressed(Button.A) && rotspeed > min) {
        rotspeed -= 1
        impnumber -= 1
    }

    if (input.logoIsPressed() && !logoispressed) {
        rotspeed = rotspeed * -1
        impnumber = impnumber * -1
        logoispressed = true
    }
    if (!input.logoIsPressed() && logoispressed) {
        logoispressed = false
    }
    whaleysans.showNumber(impnumber)
}