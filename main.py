smarthome.led_brightness(AnalogPin.P0, False)

def on_forever():
    if smarthome.dht11_sensor(DigitalPin.P0, smarthome.DHT11_state.DHT11_TEMPERATURE_C) <= 25:
        smarthome.motor_fan(AnalogPin.P1, True)
        smarthome.led_brightness(AnalogPin.P3, True)
    else:
        smarthome.motor_fan(AnalogPin.P1, False)
        smarthome.led_brightness(AnalogPin.P3, False)
    if True:
        pass
basic.forever(on_forever)
