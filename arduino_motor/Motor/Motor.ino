//motor1
int InA1 = 2; //forward
int InB1 = 3; //backward

//motor2
int InA2 = 4; 
int InB2 = 5;

void setup() {
  
  pinMode(InA1, OUTPUT);
  pinMode(InB1, OUTPUT);

  pinMode(InA2, OUTPUT);
  pinMode(InB2, OUTPUT);
  Serial.begin(9600);
}
void loop() {
  // put your main code here, to run repeatedly:ds
  int speedl, speedr, pivot, drive_mode;
  delay(3);  //delay to allow buffer to fill
  speedl = Serial.parseInt();  //gets one byte from serial buffer
  speedr = Serial.parseInt();
  pivot = Serial.parseInt();
  drive_mode = Serial.parseInt();
  
  if (drive_mode == 1){
    forward();
  }
  else if (pivot == 1){
    pivotR();
  }
  else{
    turnR();
  }

void forward(){
  digitalWrite(InA1, HIGH);
  digitalWrite(InB1, LOW);

  digitalWrite(InA2, HIGH);
  digitalWrite(InB2, LOW);
}

void pivotR(){
  digitalWrite(InA1, HIGH);
  digitalWrite(InB1, LOW);

  digitalWrite(InA2, LOW);
  digitalWrite(InB2, HIGH);
}

void pivotL(){
  digitalWrite(InA1, LOW);
  digitalWrite(InB1, HIGH);

  digitalWrite(InA2, HIGH);
  digitalWrite(InB2, LOW);
}

void turnR(){
  digitalWrite(InA1, HIGH);
  digitalWrite(InB1, LOW);

  digitalWrite(InA2, LOW);
  digitalWrite(InB2, LOW);
}

void turnL(){
  digitalWrite(InA1, LOW);
  digitalWrite(InB1, LOW);

  digitalWrite(InA2, HIGH);
  digitalWrite(InB2, LOW);
}

