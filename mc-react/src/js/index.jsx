var App = React.createClass({

  getInitialState: function() {
    return {
      "led_value": 0,
      "pot_value": 0
    };
  },

  getNewValues: function() {
    var newled_value, newpot_value;

    $.ajax({
        type: 'get',
        url: "http://localhost:8080/led/value",
        async: false,
        success: function(data) {
          newled_value = data.value;
          // alert(newled_value);
        }
    });
    this.setState({led_value: newled_value});

    $.ajax({
        type: 'get',
        url: "http://localhost:8080/pot/value",
        async: false,
        success: function(data) {
          newpot_value = data.value;
        }
    });

    // alert(newled_value);
    this.setState({led_value: newled_value, pot_value: newpot_value});
  },

  setLEDValue: function(event) {
    var newled_value;
    $.ajax({
        type: 'put',
        url: "http://localhost:8080/led/value/" + event.target.value,
        async: false,
        success: function(data) {
          newled_value = data.value;
        }
    });

    this.setState({led_value: newled_value});
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
