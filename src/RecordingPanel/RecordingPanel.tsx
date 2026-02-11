import type {FC} from "react";
import cx from "classnames";
import panelStyles from "./RecordingPanel.module.scss";
import {useDrums} from "../useDrums.tsx";
import {Track} from "./Track/Track.tsx";


export const RecordingPanel: FC = () => {
  const {tracks, toggleRecording, recordingInProgress} = useDrums()

  return (
    <section className={panelStyles.panel}>
      <span className={panelStyles.tracksHeader}>Tracks:</span>
      <div className={panelStyles.recordingButtonWrapper}>
        <button id="rec-button" onClick={toggleRecording}
                className={cx(panelStyles.recordingButton, {[panelStyles.recordingInProgress]: recordingInProgress})}/>
        <label htmlFor="rec-button">REC NEW</label></div>
      <div className={panelStyles.recordsList}>
        {tracks.map(track => <Track key={track.name} track={track}/>)}
      </div>
    </section>
  )
}