# RSX Test server

- React frontend
- Express backend
- Connection to Arduino


### There are two ways to run this depending on your needs:
1. Run with the Arduino connected to the serial port. This lets the server pass data back and forth with the Arduino.
Use the `-s` command line flag.
2. Run without an Arduino. This lets you test out dashboard widgets without needing an Arduino. This is default.

### To run
` $ python -m SimpleHTTPServer & node ./server/main.js `
Navigate to localhost:8000 and choose a frontend: either `frontend` or `mc-react`, which are pretty much equivalent. The former only uses Javascript, the latter uses react, a more complicated but powerful framework.

### Command line arguments
`-s` enables arduinos connected to serial port