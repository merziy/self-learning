import RPi.GPIO as GPIO
import time

num=int(input('How many times would you like to see the LED blink?'))

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11,GPIO.OUT)

for i in range(0,num):
        GPIO.output(11,1)
        time.sleep(1)
        GPIO.output(11,0)
        time.sleep(1)
print('Done, the LED blinked',num,'times.')
GPIO.cleanup()