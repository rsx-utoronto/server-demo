var App = React.createClass({

  getInitialState: function() {
    return {
      "led_value": 0,
      "pot_value": 0
    };
  },

  getNewValues: function() {
    $.get({
        url: "http://localhost:8080/led/value",
    })
    .done(data => this.setState({led_value: data.value}));


    $.get({
        url: "http://localhost:8080/pot/value",
    })
    .done(data => this.setState({pot_value: data.value}));
  },

  setLEDValue: function(event) {
    if (event.target.value === '') return;
    $.ajax({
        type: 'PUT',
        url: "http://localhost:8080/led/value/" + (event.target.value || "0")
    })
    .done(data => this.setState({led_value: data.value}));
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
          <button onClick={this.getNewValues}> Refresh values </button>
        </div>
        <div className="row">
          <input type="text" value={this.state.led_value} onChange={this.setLEDValue}/>
        </div>

      </div>
    );
  }
});


ReactDOM.render(<App/>, $('#app-container').get(0));
