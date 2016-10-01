var App = React.createClass({

  getInitialState: function() {
    return {
      "led_value": 0,
      "pot_value": 0
    };
  },

  setState: function(newled_value, newpot_value){
    this.state.led_value = newled_value;
    this.state.pot_value = newpot_value;
  },

  test: function() {
    alert("Hello! I am an alert box!!");
  },

  getNewValues: function() {
    var led_value, pot_value;

    $.ajax({
        type: 'get',
        url: "http://localhost:8080/led/value",
        success: function(data) {
          led_value = data.value;
        }
    });

    $.ajax({
        type: 'get',
        url: "http://localhost:8080/pot/value",
        success: function(data) {
          pot_value = data.value;
        }
    });

    this.setState(led_value, pot_value);
  },

  setLEDValue: function(event) {
    $.ajax({
        type: 'put',
        url: "http://localhost:8080/pot/" + event.target.value,
        success: function(data) {
          setState(event.target.value, this.state.pot_value);
          alert("LED Value Set!!!");
        }
    });
  },

  render: function() {
    return (
      <div className="container-fluid">
        <h1>Potentiometer Dashboard Thingy</h1>
        <table className="table table-striped table-hover ">
          <thead>
            <th>Item</th>
            <th>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>LED</td>
              <td>{this.state.led_value}</td>
            </tr>
            <tr>
              <td>Potentiometer</td>
              <td>{this.state.pot_value}</td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <button onClick = {this.test} > Test Button (Don't Click)</button>
          <button onClick = {this.getNewValues}> Update Values</button>
        </div>
        <div className="row">
          <input type="text" value={this.state.led_value} onChange={this.setLEDValue}/>
        </div>

      </div>
    );
  }
});


ReactDOM.render(<App/>, document.getElementById('app-container'));
