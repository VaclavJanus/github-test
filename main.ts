smarthome.ledBrightness(AnalogPin.P0, false)
basic.forever(function on_forever() {
    if (smarthome.dht11Sensor(DigitalPin.P0, smarthome.DHT11_state.DHT11_temperature_C) <= 25) {
        smarthome.motorFan(AnalogPin.P1, true)
        smarthome.ledBrightness(AnalogPin.P3, true)
    } else {
        smarthome.motorFan(AnalogPin.P1, false)
        smarthome.ledBrightness(AnalogPin.P3, false)
    }
    
    if (true) {
        
    }
    
})
