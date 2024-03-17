input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.Ghost)
    basic.pause(200)
    basic.clearScreen()
})
