function 搖桿區間判斷 () {
    if (x軸引腳值 > 662) {
        x區間碼 = 2
    } else if (x軸引腳值 < 365) {
        x區間碼 = 0
    } else {
        x區間碼 = 1
    }
    if (y引腳值 > 662) {
        y區間碼 = 2
    } else if (y引腳值 < 365) {
        y區間碼 = 0
    } else {
        y區間碼 = 1
    }
}
let y區間碼 = 0
let y引腳值 = 0
let x區間碼 = 0
let x軸引腳值 = 0
radio.setGroup(18)
basic.showIcon(IconNames.Giraffe)
basic.forever(function () {
    x軸引腳值 = pins.analogReadPin(AnalogPin.P2)
    y引腳值 = pins.analogReadPin(AnalogPin.P1)
    搖桿區間判斷()
    if (x區間碼 == 0 && y區間碼 == 2) {
        radio.sendString("右後")
    } else if (x區間碼 == 1 && y區間碼 == 0) {
        radio.sendString("前進")
    } else if (x區間碼 == 1 && y區間碼 == 1) {
        radio.sendString("停止")
    } else if (x區間碼 == 1 && y區間碼 == 2) {
        radio.sendString("後退")
    } else if (x區間碼 == 2 && y區間碼 == 0) {
        radio.sendString("左前")
    } else if (x區間碼 == 2 && y區間碼 == 1) {
        radio.sendString("左轉")
    } else if (x區間碼 == 2 && y區間碼 == 2) {
        radio.sendString("左後")
    } else if (x區間碼 == 0 && y區間碼 == 0) {
        radio.sendString("右前")
    } else if (x區間碼 == 0 && y區間碼 == 1) {
        radio.sendString("右轉")
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        radio.sendString("A")
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        radio.sendString("B")
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("C")
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("D")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("E")
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        radio.sendString("F")
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("P")
    }
})
