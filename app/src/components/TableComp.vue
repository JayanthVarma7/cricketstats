<template>
  <div>
    <div class="filterClass">
      <section>
        <!-- <o-field label="filter" class="filterClass"> -->
        <o-select placeholder="filter fields" @change="getField">
          <option value="pts" v-if="tabcount == 0">points</option>
          <option value="wins" v-if="tabcount == 0">wins</option>
          <option value="runs" v-if="tabcount == 1">runs</option>
          <option value="wickets" v-if="tabcount == 2">wickets</option>
          <option value="rank" v-if="tabcount != 0">rank</option>
        </o-select>
        <!-- </o-field> -->
        <!-- <o-field label="Comparators" class="filterClass"> -->
        <o-select placeholder="operators" @change="getComp">
          <option value="equal">Equal</option>
          <option value="lessthan">Lessthan</option>
          <option value="greaterthan">Greaterthan</option>
        </o-select>
        <!-- </o-field> -->
        <!-- <o-field lable="fitervalue"> -->
        <o-input @change="getVal"></o-input>
        <!-- </o-field> -->
      </section>
    </div>
    <table class="table is-bordered">
      <thead>
        <th v-for="column in columns[tabcount]" :key="column.field">
          {{ column.label }}
        </th>
      </thead>
      <tbody>
        <tr v-for="d in filters.filteredData[tabcount]" :key="d.id">
          <td>{{ d.id }}</td>

          <td v-if="tabcount == 0">{{ d.team }}</td>
          <td v-else>{{ d.player }}</td>

          <td v-if="tabcount == 0">{{ d.matches }}</td>
          <td v-else>{{ d.team }}</td>

          <td v-if="tabcount == 0">{{ d.wins }}</td>
          <td v-else>{{ d.matches }}</td>

          <td v-if="tabcount == 0">{{ d.loss }}</td>
          <td v-else-if="tabcount == 1">{{ d.runs }}</td>
          <td v-else>{{ d.wickets }}</td>

          <td v-if="tabcount == 0">{{ d.tie }}</td>
          <td v-else>{{ d.rank }}</td>

          <td v-if="tabcount == 0">{{ d.pts }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TableComp",
  props: {
    tabcount: Number,
  },
  setup(props) {
    console.log(props.tabcount);
    const filters = ref({
      fields: "",
      operators: "",
      val: null,
      filteredData: [
        [
          { id: 1, team: "MI", matches: 5, wins: 5, loss: 0, tie: 0, pts: 10 },
          { id: 2, team: "CSK", matches: 5, wins: 4, loss: 1, tie: 0, pts: 8 },
          { id: 3, team: "RCB", matches: 5, wins: 4, loss: 1, tie: 0, pts: 8 },
          { id: 4, team: "KKR", matches: 5, wins: 3, loss: 2, tie: 0, pts: 6 },
          { id: 5, team: "SRH", matches: 5, wins: 3, loss: 2, tie: 0, pts: 6 },
          { id: 6, team: "RR", matches: 5, wins: 2, loss: 3, tie: 0, pts: 4 },
          { id: 7, team: "GL", matches: 5, wins: 2, loss: 3, tie: 0, pts: 4 },
          { id: 8, team: "LSG", matches: 5, wins: 1, loss: 4, tie: 0, pts: 2 },
          { id: 9, team: "KIXP", matches: 5, wins: 1, loss: 4, tie: 0, pts: 2 },
          { id: 10, team: "DC", matches: 5, wins: 0, loss: 5, tie: 0, pts: 0 },
        ],
        [
          {
            id: 1,
            player: "Rohit sharma",
            team: "MI",
            matches: 5,
            runs: 500,
            rank: 1,
          },
          {
            id: 2,
            player: "Virat Kohli",
            team: "RCB",
            matches: 5,
            runs: 400,
            rank: 2,
          },
          {
            id: 3,
            player: "player3",
            team: "KIXP",
            matches: 5,
            runs: 350,
            rank: 3,
          },
          {
            id: 4,
            player: "player4",
            team: "SRH",
            matches: 5,
            runs: 350,
            rank: 4,
          },
          {
            id: 5,
            player: "player5",
            team: "RR",
            matches: 5,
            runs: 300,
            rank: 5,
          },
          {
            id: 6,
            player: "player6",
            team: "RR",
            matches: 5,
            runs: 270,
            rank: 6,
          },
          {
            id: 7,
            player: "player7",
            team: "MI",
            matches: 5,
            runs: 240,
            rank: 7,
          },
          {
            id: 8,
            player: "player8",
            team: "CSK",
            matches: 5,
            runs: 240,
            rank: 8,
          },
          {
            id: 9,
            player: "player9",
            team: "LSG",
            matches: 5,
            runs: 200,
            rank: 9,
          },
          {
            id: 10,
            player: "player10",
            team: "GL",
            matches: 5,
            runs: 190,
            rank: 10,
          },
        ],
        [
          {
            id: 1,
            player: "player1",
            team: "MI",
            matches: 4,
            wickets: 12,
            rank: 1,
          },
          {
            id: 2,
            player: "player2",
            team: "RCB",
            matches: 5,
            wickets: 12,
            rank: 2,
          },
          {
            id: 3,
            player: "player3",
            team: "KIXP",
            matches: 5,
            wickets: 10,
            rank: 3,
          },
          {
            id: 4,
            player: "player4",
            team: "SRH",
            matches: 5,
            wickets: 8,
            rank: 4,
          },
          {
            id: 5,
            player: "player5",
            team: "RR",
            matches: 5,
            wickets: 8,
            rank: 5,
          },
          {
            id: 6,
            player: "player6",
            team: "RR",
            matches: 5,
            wickets: 7,
            rank: 6,
          },
          {
            id: 7,
            player: "player7",
            team: "MI",
            matches: 5,
            wickets: 6,
            rank: 7,
          },
          {
            id: 8,
            player: "player8",
            team: "CSK",
            matches: 4,
            wickets: 5,
            rank: 8,
          },
          {
            id: 9,
            player: "player9",
            team: "LSG",
            matches: 5,
            wickets: 5,
            rank: 9,
          },
          {
            id: 10,
            player: "player10",
            team: "GL",
            matches: 5,
            wickets: 4,
            rank: 10,
          },
        ],
      ],
    });
    const data=[[
          { id: 1, team: "MI", matches: 5, wins: 5, loss: 0, tie: 0, pts: 10 },
          { id: 2, team: "CSK", matches: 5, wins: 4, loss: 1, tie: 0, pts: 8 },
          { id: 3, team: "RCB", matches: 5, wins: 4, loss: 1, tie: 0, pts: 8 },
          { id: 4, team: "KKR", matches: 5, wins: 3, loss: 2, tie: 0, pts: 6 },
          { id: 5, team: "SRH", matches: 5, wins: 3, loss: 2, tie: 0, pts: 6 },
          { id: 6, team: "RR", matches: 5, wins: 2, loss: 3, tie: 0, pts: 4 },
          { id: 7, team: "GL", matches: 5, wins: 2, loss: 3, tie: 0, pts: 4 },
          { id: 8, team: "LSG", matches: 5, wins: 1, loss: 4, tie: 0, pts: 2 },
          { id: 9, team: "KIXP", matches: 5, wins: 1, loss: 4, tie: 0, pts: 2 },
          { id: 10, team: "DC", matches: 5, wins: 0, loss: 5, tie: 0, pts: 0 },
        ],
        [
          {id: 1,player: "Rohit sharma",team: "MI",matches: 5,runs: 500,rank: 1},
          {id: 2,player: "Virat Kohli",team: "RCB",matches: 5,runs: 400,rank: 2},
          {id: 3,player: "player3",team: "KIXP",matches: 5,runs: 350,rank: 3},
          {id: 4,player: "player4",team: "SRH",matches: 5,runs: 350,rank: 4},
          {id: 5,player: "player5",team: "RR",matches: 5,runs: 300,rank: 5},
          {id: 6,player: "player6",team: "RR",matches: 5,runs: 270,rank: 6},
          {id: 7,player: "player7",team: "MI",matches: 5,runs: 240,rank: 7},
          {id: 8,player: "player8",team: "CSK",matches: 5,runs: 240,rank: 8},
          {id: 9,player: "player9",team: "LSG",matches: 5,runs: 200,rank: 9},
          {id: 10,player: "player10",team: "GL",matches: 5,runs: 190,rank: 10,},
        ],
        [
          {id: 1,player: "player1",team: "MI",matches: 4,wickets: 12,rank: 1},
          {id: 2,player: "player2",team: "RCB",matches: 5,wickets: 12,rank: 2},
          {id: 3,player: "player3",team: "KIXP",matches: 5,wickets: 10,rank: 3},
          {id: 4,player: "player4",team: "SRH",matches: 5,wickets: 8,rank: 4},
          {id: 5,player: "player5",team: "RR",matches: 5,wickets: 8,rank: 5},
          {id: 6,player: "player6",team: "RR",matches: 5,wickets: 7,rank: 6},
          {id: 7,player: "player7",team: "MI",matches: 5,wickets: 6,rank: 7},
          {id: 8,player: "player8",team: "CSK",matches: 4,wickets: 5,rank: 8},
          {id: 9,player: "player9",team: "LSG",matches: 5,wickets: 5,rank: 9},
          {id: 10,player: "player10",team: "GL",matches: 5,wickets: 4,rank: 10},
        ]];
    const columns = [
      [
        { field: "id", label: "ID" },
        { field: "team", label: "Team" },
        { field: "matches", label: "Matches" },
        { field: "wins", label: "Wins" },
        { field: "loss", label: "Loss" },
        { field: "tie", label: "Tie" },
        { field: "pts", label: "Pts" },
      ],
      [
        { field: "id", label: "ID" },
        { field: "player", label: "Player" },
        { field: "team", label: "Team" },
        { field: "matches", label: "Matches" },
        { field: "runs", label: "Runs" },
        { field: "rank", label: "Rank" },
      ],
      [
        { field: "id", label: "ID" },
        { field: "player", label: "Player" },
        { field: "team", label: "Team" },
        { field: "matches", label: "Matches" },
        { field: "wickets", label: "Wickets" },
        { field: "rank", label: "Rank" },
      ],
    ];

    const getField = (e) => {
      console.log(e.target.value);
      filters.value.fields = e.target.value;
    };

    const getComp = (e) => {
      console.log(e.target.value);
      filters.value.operators = e.target.value;
    };

    const getVal = (e) => {
      console.log(e.target.value);
      filters.value.val = Number(e.target.value);
      if (filters.value.val !== null) {
        filters.value.filteredData[props.tabcount] = data[
          props.tabcount
        ].filter((Team) => {
          if (filters.value.operators === "equal") {
            return Team[filters.value.fields] === filters.value.val;
          } else if (filters.value.operators === "lessthan") {
            return Team[filters.value.fields] < filters.value.val;
          } else if (filters.value.operators === "greaterthan") {
            return Team[filters.value.fields] > filters.value.val;
          }
        });
      } else {
        filters.value.filteredData = data[props.tabcount];
      }
    };

    return {
      data,
      columns,
      filters,
      getField,
      getComp,
      getVal,
    };
  },
};
</script>
<style scoped>
table {
  width: 100%;
}
/* .filterClass {
  padding: 20px;
}
.filterValue {
  padding: 20px;
  width: 20% !important;
  display: inline;
} */
::v-deep(input) {
  width: 20%;
}
</style>
