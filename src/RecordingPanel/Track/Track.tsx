import type {FC} from "react";
import {type Track as TrackType, useDrums} from "../../useDrums.tsx";
import trackStyles from "./Track.module.scss";
import {FaPlay} from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export const Track: FC<{ track: TrackType }> = ({track}) => {
  const {playTrack, selectTrack} = useDrums()
  return (
    <div className={trackStyles.trackWrapper} onClick={() => selectTrack(track)}>
      <FaPlay size="25px" onClick={() => playTrack(track)}/>
      {track.name}
      <TiDelete size="25px" className={trackStyles.deleteButton} onClick={(e) => e.stopPropagation() } />
    </div>
  )
}