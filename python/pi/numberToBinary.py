import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

num=int(input('Enter a number, up to 16, to view in binary on the LEDs. '))
gpio_pins=[11,13,15,35,37]
bin_str=bin(num)[2:].zfill(5)

for pin in gpio_pins:
        GPIO.setup(pin,GPIO.OUT)

for i,value in enumerate(reversed(bin_str)):
        print(bin_str,i,value)
        if value == '1':
                GPIO.output(gpio_pins[i],1)
                time.sleep(1)
        else:
                GPIO.output(gpio_pins[i],0)
print('Done')

