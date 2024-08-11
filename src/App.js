import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        playerName="MESSI"
        src="https://www.fifarosters.com/assets/players/fifa24/faces/158023.png"
        power={94}
        country="	https://www.fifarosters.com/assets/nations/fifa17/52.png"
        position="RW"
        team="https://www.fifarosters.com/assets/clubs/fifa24/241.png"
        pac={87}
        sho={92}
        pas={92}
        dri={96}
        def={39}
        phy={66}
      />
      <Card
        playerName="NEYMAR JR"
        src="	https://www.fifarosters.com/assets/players/fifa24/faces/190871.png"
        power={92}
        country="	https://www.fifarosters.com/assets/nations/fifa17/54.png"
        position="RW"
        team="https://www.fifarosters.com/assets/clubs/fifa24/73.png"
        pac={91}
        sho={85}
        pas={87}
        dri={95}
        def={32}
        phy={58}
      />
      <Card
        playerName="DE BRUYNE"
        src="https://www.fifarosters.com/assets/players/fifa24/faces/192985.png"
        power={91}
        country="	https://www.fifarosters.com/assets/nations/fifa17/7.png"
        position="CM"
        team="https://www.fifarosters.com/assets/clubs/fifa24/10.png"
        pac={96}
        sho={86}
        pas={92}
        dri={86}
        def={61}
        phy={78}
      />
    </div>
  );
}

export default App;
