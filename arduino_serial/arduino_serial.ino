const int analogInPin = A1;
const int analogOutPin = A0;

int sensorValue = 0;
int LEDstatus = 0;

void setup() {
  // put your setup code here, to run once:
  
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:

  //Serial.println(LEDstatus);
  sensorValue = analogRead(analogInPin);
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  LEDstatus = Serial.parseInt();
  if (LEDstatus != 0) {
    analogWrite(analogOutPin, LEDstatus);
  }

  delay(1000);
}
