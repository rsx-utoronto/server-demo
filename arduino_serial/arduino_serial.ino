/* Setup and Pin Assignments */ 
const int inPin = A1;   // To middle pin of potentiometer or whichever input device you choose. 
                        // Should be connected to an analog pin. 
const int outPin = 3;   // To LED or other output device, should be connected to PWM pin. 

int sensorValue, LEDstatus;   

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Writes to serial port "sensor = 123"
  sensorValue = analogRead(inPin);  
  Serial.print("sensor = ");
  Serial.print(sensorValue);

  // Read LED value from the Serial port and 
  LEDstatus = Serial.parseInt();  
  if (LEDstatus != 0)
    analogWrite(outPin, LEDstatus);

  delay(100);
}
