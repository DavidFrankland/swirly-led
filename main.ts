function screen (angle: number) {
    return Math.map(Math.sin(angle), -1, 1, 0, 5)
}
let x_angle = 0
let y_angle = 0
let x_increment = 0.1
let y_increment = 0.089
while (true) {
    x_angle += x_increment
    y_angle += y_increment
    basic.clearScreen()
    led.plot(screen(x_angle), screen(y_angle))
    control.waitMicros(10000)
}
