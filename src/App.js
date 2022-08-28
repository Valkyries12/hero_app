import { Paper } from '@mui/material';
import './App.css';
import Login from './pages/Login';

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
        <Login />
      </div>
    </Paper>
  );
}

export default App;
