import React from 'react';
import './styles/App.css';


class App extends React.Component {
  state = {
    fields: [
      { id: 0, active: false },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false },
      { id: 8, active: false },
      { id: 9, active: false },
      { id: 10, active: false },
      { id: 11, active: false },
      { id: 12, active: false },
      { id: 13, active: false },
      { id: 14, active: false },
      { id: 15, active: false },
      { id: 16, active: false },
      { id: 17, active: false },
      { id: 18, active: false },
      { id: 19, active: false }
    ]
  }
  handleClick = (event) => {
    const updatedFields = this.state.fields.slice();
    const active = updatedFields[event.target.id].active;
    updatedFields[event.target.id] = { id: Number(event.target.id), active: !active };
    this.setState({
      fields: updatedFields
    })

  }
  handleReset = () => {
    const resetedFields = this.state.fields.slice();
    for (let i = 0; i <= 19; i++) {
      resetedFields[i] = { id: i, active: false };
    }
    this.setState({
      fields: resetedFields
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Bingo</h1>
        <table>
          <tbody>
            <tr>
              <td id={this.state.fields[0].id} onClick={this.handleClick}><p id={this.state.fields[0].id} onClick={this.handleClick} className={this.state.fields[0].active ? "done" : null}>*Patrzenie przez okno*</p></td>
              <td id={this.state.fields[1].id} onClick={this.handleClick}><p id={this.state.fields[1].id} onClick={this.handleClick} className={this.state.fields[1].active ? "done" : null}>Wstawiam ci uwage</p></td>
              <td id={this.state.fields[2].id} onClick={this.handleClick}><p id={this.state.fields[2].id} onClick={this.handleClick} className={this.state.fields[2].active ? "done" : null}>Code Bloks</p></td>
              <td id={this.state.fields[3].id} onClick={this.handleClick}><p id={this.state.fields[3].id} onClick={this.handleClick} className={this.state.fields[3].active ? "done" : null}>Ten w czarnym</p></td>
              <td id={this.state.fields[4].id} onClick={this.handleClick}><p id={this.state.fields[4].id} onClick={this.handleClick} className={this.state.fields[4].active ? "done" : null}>Szisza</p></td>
            </tr>
            <tr>
              <td id={this.state.fields[5].id} onClick={this.handleClick}><p id={this.state.fields[5].id} onClick={this.handleClick} className={this.state.fields[5].active ? "done" : null}>*Projektor sam się włącza*</p></td>
              <td id={this.state.fields[6].id} onClick={this.handleClick}><p id={this.state.fields[6].id} onClick={this.handleClick} className={this.state.fields[6].active ? "done" : null}>Wstawiam ci jedynke</p></td>
              <td id={this.state.fields[7].id} onClick={this.handleClick}><p id={this.state.fields[7].id} onClick={this.handleClick} className={this.state.fields[7].active ? "done" : null}>*Tapeta w pieski*</p></td>
              <td id={this.state.fields[8].id} onClick={this.handleClick}><p id={this.state.fields[8].id} onClick={this.handleClick} className={this.state.fields[8].active ? "done" : null}>Kto chce odpowiadać?</p></td>
              <td id={this.state.fields[9].id} onClick={this.handleClick}><p id={this.state.fields[9].id} onClick={this.handleClick} className={this.state.fields[9].active ? "done" : null}>Aaa</p></td>
            </tr>
            <tr>
              <td id={this.state.fields[10].id} onClick={this.handleClick}><p id={this.state.fields[10].id} onClick={this.handleClick} className={this.state.fields[10].active ? "done" : null}>Fajne jest</p></td>
              <td id={this.state.fields[11].id} onClick={this.handleClick}><p id={this.state.fields[11].id} onClick={this.handleClick} className={this.state.fields[11].active ? "done" : null}>No nie</p></td>
              <td id={this.state.fields[12].id} onClick={this.handleClick}><p id={this.state.fields[12].id} onClick={this.handleClick} className={this.state.fields[12].active ? "done" : null}>Pacie się</p></td>
              <td id={this.state.fields[13].id} onClick={this.handleClick}><p id={this.state.fields[13].id} onClick={this.handleClick} className={this.state.fields[13].active ? "done" : null}>Wyłączcie te dźwięki</p></td>
              <td id={this.state.fields[14].id} onClick={this.handleClick}><p id={this.state.fields[14].id} onClick={this.handleClick} className={this.state.fields[14].active ? "done" : null}>Ćśśś</p></td>
            </tr>
            <tr>
              <td id={this.state.fields[15].id} onClick={this.handleClick}><p id={this.state.fields[15].id} onClick={this.handleClick} className={this.state.fields[15].active ? "done" : null}>Kto to powiedział?</p></td>
              <td id={this.state.fields[16].id} onClick={this.handleClick}><p id={this.state.fields[16].id} onClick={this.handleClick} className={this.state.fields[16].active ? "done" : null}>*Poker face*</p></td>
              <td id={this.state.fields[17].id} onClick={this.handleClick}><p id={this.state.fields[17].id} onClick={this.handleClick} className={this.state.fields[17].active ? "done" : null}>Rząd pod oknem</p></td>
              <td id={this.state.fields[18].id} onClick={this.handleClick}><p id={this.state.fields[18].id} onClick={this.handleClick} className={this.state.fields[18].active ? "done" : null}>Wiech</p></td>
              <td id={this.state.fields[19].id} onClick={this.handleClick}><p id={this.state.fields[19].id} onClick={this.handleClick} className={this.state.fields[19].active ? "done" : null}>If</p></td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;


