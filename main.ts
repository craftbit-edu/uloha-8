function Nastavení () {
    wuKong.mecanumWheel(
    wuKong.ServoList.S5,
    wuKong.ServoList.S1,
    wuKong.ServoList.S7,
    wuKong.ServoList.S3
    )
    rychlost = 250
}
let rychlost = 0
Nastavení()
wuKong.mecanumRun(wuKong.RunList.rear, 250)
basic.pause(1000)
wuKong.mecanumStop()
