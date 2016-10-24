int photocellPin = 0; 
void setup() { 
  Serial.begin(9600); 
}

void loop() { 
delay(1000); 
float Vout = analogRead(photocellPin); 
Serial.println(Vout);
//float Vout = 5.0; //simulating 
float Temp = (Vout/1024.0)*5000; //convert to millivolts
float cel = Temp/10; //get temperature in celcius (1Cel/10mv ratio)
Serial.println(cel);
delay(1000);
}
