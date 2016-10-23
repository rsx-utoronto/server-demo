/* Setup and Pin Assignments */ 
const int analogInPin = A1;   // To middle pin of potentiometer 
                              // or whichever input device you choose 
const int analogOutPin = A0;  // To LED or other output device

int sensorValue, LEDstatus;   

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Writes to serial port "sensor = 123"
  sensorValue = analogRead(analogInPin);  
  Serial.print("sensor = ");
  Serial.print(sensorValue);

  // Read LED value from the Serial port and 
  LEDstatus = Serial.parseInt();  
  analogWrite(analogOutPin, LEDstatus);

  delay(100);
}
