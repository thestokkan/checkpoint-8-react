import React, {useContext, useState} from 'react';
import './App.css';
import {ThemeContext} from "./theme";
import './theme/variables.css';
import {FaMoon, FaSun} from "react-icons/fa";
import {Button, Input, Table, Dropdown} from "./components";
import {PlayerTable} from "./components/Table";

export type Player = {
    name: string;
    team: string;
    score: number;
    id: number;
};

function App() {
    // Theme settings
    const themeContext = useContext(ThemeContext);
    const [themeIcon, setThemeIcon] = useState(<FaSun/>)
    const toggleTheme = () => {
        if (themeContext) {
            if (themeContext.theme === "dark") {
                themeContext.setTheme("light");
                setThemeIcon(<FaMoon/>);
            } else {
                themeContext.setTheme("dark");
                setThemeIcon(<FaSun/>);
            }
        }
    }

    // Input
    const [nameInput, setNameInput] = useState('');
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
    };

    const [team, setTeam] = useState('blue');
    const [players, setPlayers] = useState<Player[]>([]);
    const [winner, setWinner] = useState(false);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addPlayer();
        }
    };

    const addPlayer = () => {
        const newPlayer:Player = {
            name: nameInput,
            team: team,
            score: 0,
            id: Date.now() // Yeah, yeah, I know...
        }

        players.push(newPlayer);
        setPlayers([...players]);
        console.log(players);
    }

    const updateScores = (team:string) => {

    }

    return (
        <div className="App">
            <div className="container">
                <div className="toggle-theme">
                    <Button onClick={() => {
                        toggleTheme()
                    }} type={"theme"} children={themeIcon}></Button>
                </div>
                <h2>
                    Welcome to my awesome team game!
                </h2>
                <p>
                    Here is my new awesome team game. Here you can add players and make them part of a team. Then
                    you
                    are able to give points to any team you like by pressing the buttons in the bottom. Each player
                    in
                    the team will then score point. If you can't decide on which is your favorite team then you can
                    press the Random button to give to any team.
                </p>
                <p>The table in the middle should display who has the most points by sorting the table. Here you
                    are
                    also able to remove a player from the game if you want to.
                </p>
                <p>Once a player has received 5 points then the game is over and that person will be celebrated and
                    you
                    are able to play again. Try it out for yourself!
                </p>

                <h4>Add a new Player</h4>
                <div className="add-player">
                    <Input type="text"
                           className="nameInput"
                           id="name"
                           onChange={handleNameChange}
                           onKeyDown={handleKeyDown}
                           value={nameInput}
                           label="Player Name"
                    />
                    <Dropdown label="Player Team"
                              opt1="blue"
                              opt2="red"
                              opt3="yellow"
                              value={team}
                              setValue={setTeam}
                    ></Dropdown>
                    <Button
                        children="Add player"
                        onClick={addPlayer}
                        type="default"
                    />
                </div>
                <div className="scoreboard">
                    <PlayerTable players={players}></PlayerTable>
                </div>
                <h4>Give points to any team!</h4>
                <div className="button-group flex-row">
                    <Button id="blue" onClick={
                        () => console.log("Blue!")
                    } type="default">Team Blue</Button>
                    <Button id="red" onClick={() => console.log("Red!")} type="default">Team Red</Button>
                    <Button id="yellow" onClick={() => console.log("Yellow!")} type="default">Team Yellow</Button>
                    <Button id="any" onClick={() => console.log("Any!")} type="default">Random</Button>
                </div>
            </div>
        </div>

    );
}

export default App;