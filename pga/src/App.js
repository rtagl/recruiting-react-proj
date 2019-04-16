import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    players: [{ firstName: "Rob", lastName: "Vera", score: 88 }, { firstName: "Alice", lastName: "Geary", score: 96 }, { firstName: "John", lastName: "Junge", score: 96 }],
    newFirstName: "",
    newLastName: "",
    newScore: ""
  }

  // Displays the player names and scores by adding rows to a table
  showPlayers = () => {
    let playersList = this.state.players.map((player, i) => {
      return (
        <tr key={i}>
          <td>{player.lastName}, {player.firstName}</td>
          <td>{player.score}</td>
          <td>
            <button className="delete-player" onClick={() => { this.deletePlayer(i) }}>Delete</button>
          </td>
        </tr>
      )
    })
    return playersList;
  }
  
  // add the new first name from the input to the state
  addFirstName = (e) => {
    console.log(e.target.value)
    this.setState({
      newFirstName: e.target.value
    })
  }

  // add the new last name from the input to the state
  addLastName = (e) => {
    this.setState({
      newLastName: e.target.value
    })
  }

  // add the new score from the input to the state
  addScore = (e) => {
    this.setState({
      newScore: e.target.value
    })
  }
  
  // compare players primarily based on score in ascending order. If scores are equal compares last name
  comparePlayers = (a, b) => {
    if (a.score < b.score) {
      return -1
    }
    if (a.score > b.score) {
      return 1
    }
    if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
      return -1
    }
    if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
      return 1
    }
  }

  // add the new player object to the state player list
  addPlayer = (e) => {
    e.preventDefault();

    if (this.state.newScore > 100 || this.state.newScore <0) {
      alert("Scores must be between 0 and 100!")
      return
    }

    document.getElementById("player-form").reset();
    
    let newPlayersList = [...this.state.players];

    let newPlayer = { firstName: this.state.newFirstName, lastName: this.state.newLastName, score: this.state.newScore }
    newPlayersList.push(newPlayer)

    this.setState({
      players: newPlayersList.sort(this.comparePlayers)
    })
  }

  // Deletes the respective player from the list
  deletePlayer = (i) => {
    let updatedList = [...this.state.players]
    updatedList.splice(i, 1);

    this.setState({
      players: updatedList
    })
  }



  render() {
    return (
      <div className="App">
        <img width="200px" src="./pga_logo.png" alt="pga" />
        <h1>Add Player</h1>

        <form id="player-form">
          <input
            type="text"
            value={this.state.newFirstName}
            placeholder="First Name"
            onChange={e => {
              this.addFirstName(e);
            }}
          />
          <input
            type="text"
            value={this.state.newLastName}
            placeholder="Last Name"
            onChange={e => {
              this.addLastName(e);
            }}
          />
          <input
            type="number"
            value={this.state.newScore}
            placeholder="Score"
            onChange={e => {
              this.addScore(e);
            }}
          />
          <input
            className="add-player"
            value="submit"
            type="submit"
            onClick={e => {
              this.addPlayer(e);
            }}
          />
        </form>

        <h1>Leaderboard</h1>

        <table className="player-list">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Delete</th>
            </tr>
            {this.showPlayers()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
