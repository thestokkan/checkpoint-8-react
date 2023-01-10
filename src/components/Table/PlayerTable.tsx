import {Table} from "../index";
import {Player} from "../../App";

type PlayerTableProps = {
    players: Player[];
};

const PlayerTable = ({players}: PlayerTableProps) => {
    const rows = players.map((player) => {
        return [player.name, player.team, player.score];
    });
    const headers = ["Name", "Team", "Score"];

    return <Table headers={headers} rows={rows}></Table>;
}

export default PlayerTable;