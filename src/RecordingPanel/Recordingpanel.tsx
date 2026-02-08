import type {FC} from "react";
import cx from "classnames";
import panelStyles from "./RecordingPanel.module.scss";
import {useDrums} from "../useDrums.tsx";


export const RecordingPanel: FC = () => {
  const {tracks, toggleRecording, recordingInProgress, playTrack} = useDrums()

  return (
    <section className={panelStyles.panel}>
      <button id="rec-button" onClick={toggleRecording} className={cx(panelStyles.recordingButton, {[panelStyles.recordingInProgress]: recordingInProgress})}>
      </button>
      <label htmlFor="rec-button">REC</label>

      <span>Tracks:</span>
      <ul>
        {tracks.map(track => <li onClick={()=> playTrack(track)}>{track.name}</li>)}
      </ul>
    </section>
  )
}