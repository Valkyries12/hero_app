import { Paper } from '@mui/material';
import './App.css';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";

//componentes
import Home from './pages/Home';

const styles = {
  paperContainer: {
    backgroundImage: `url(images/superhero-background.jpeg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    position: "relative"
  },
  backgroundWrapper: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, .7)",
    // zIndex: -10
  }
}

function App() {
  return (
    <Paper style={styles.paperContainer}>
      <div style={styles.backgroundWrapper}>
        <Routes>
          <Route path="/" element={<Login />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Paper>
  );
}

export default App;
