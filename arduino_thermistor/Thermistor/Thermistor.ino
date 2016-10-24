int photocellPin = 0;
void setup() {
  Serial.begin(9600);

}

void loop() {
  delay(1000);
  float Vout = analogRead(photocellPin);
  //Serial.println(Vout);
  //float Vout = 5.0; //simulating
  float Temp = (Vout / 1024.0) * 5000; //convert to millivolts
  float cel = Temp / 10; //get temperature in celcius (1Cel/10mv ratio)

  //Serial.print("Temperature "),cel," 11"," 12"," 13"," 14"," 15");
  
  Serial.print("Temperatures ");
  for (int i = 0; i<7; i++){
    Serial.print(cel+i);
    Serial.print(" ");
    }
  Serial.println(" ");
  Serial.print("Currents " );
  for (int j = 0; j<7; j++){
    Serial.print(10+j);
    Serial.print(" ");
    }
  Serial.println(" ");
  delay(1000);
}
