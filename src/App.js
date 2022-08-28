import { Paper } from '@mui/material';
import './App.css';

const styles = {
  paperContainer: {
    backgroundImage: `url(images/superhero-background.jpeg)`,
    width: "100vw",
    height: "100vh"
  }
}

function App() {
  return (
    <div style={styles.paperContainer}>
      hello world
    </div>
  );
}

export default App;
