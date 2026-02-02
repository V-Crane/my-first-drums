import styles from "./App.module.scss";
import {Drum} from "./Drum/Drum.tsx";
import {Header} from "./Header/Header.tsx";
import {RecordingPanel} from "./RecordingPanel/Recordingpanel.tsx";
import {useDrums} from "./useDrums.tsx";

function App() {
  const {drums} = useDrums();

  return (
    <main className={styles.page}>
      <Header/>
      <RecordingPanel/>
      <div className={styles['drums-view']}>
        {drums.map((drum) => <Drum key={drum.id} {...drum} />)}
      </div>
    </main>
  )
}

export default App
