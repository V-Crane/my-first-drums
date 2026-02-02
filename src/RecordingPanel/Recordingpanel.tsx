import type {FC} from "react";
import cx from "classnames";
import panelStyles from "./RecordingPanel.module.scss";
import {useDrums} from "../useDrums.tsx";


export const RecordingPanel: FC = () => {
  const {tracks, toggleRecording, recordingInProgress, playTrack} = useDrums()

  return (
    <menu>
      <button onClick={toggleRecording} className={cx({[panelStyles.recordingInProgress]: recordingInProgress})}>
        <div/>
        REC
      </button>

      <span>Tracks:</span>
      <ul>
        {tracks.map(track => <li onClick={()=> playTrack(track)}>{track.name}</li>)}
      </ul>
    </menu>
  )
}