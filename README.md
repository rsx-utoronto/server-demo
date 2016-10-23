# RSX Test server
- React/ vanilla frontend (frontend, mc-react respectively)
- Express backend
- Connection to Arduino

### There are several ways to run this depending on your needs:
1. Run the Arduino-server connection. Upload the Arduino code, then:
` $ node ./server/main.js -s`
2. Run the server-dashboard connection. This lets you test out dashboard widgets without needing an Arduino. This is default.
` $ python -m SimpleHTTPServer & node ./server/main.js `
3. Run the Arduino-server-dashboard. Upload the Arduino code, then:
` $ python -m SimpleHTTPServer & node ./server/main.js -s`

If you've started the dashboard, navigate to localhost:8000 and choose a frontend: either `frontend` or `mc-react`, which are pretty much equivalent.
The former uses vanilla Javascript (albeit with jQuery), the latter uses react, a more complicated but powerful framework.

### Setup
1. Install Python3 and Nodejs 6
2. Run ` $ npm install `

### Command line arguments
`-h` shows help
`-s` enables arduinos connected to serial port
`-v` enables verbose debugging