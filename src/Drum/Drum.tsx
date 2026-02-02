import {type FC, useEffect} from "react";
import drum from './Drum.module.scss'
import cx from "classnames";
import {useDrums} from "../useDrums.tsx";
import type {Drum as DrumProps} from '../useDrums.tsx'

export const Drum: FC<DrumProps> = (
  {
    id,
    size,
    button,
    keyCode,
    top,
    left,
    animationInProgress
  }
) => {
  const {waitMode, playDrum} = useDrums()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === keyCode) {
        playDrum(id)
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [id, keyCode, playDrum])

  return (
    <div
      className={cx(drum.drum, drum[size], {
        [drum['drum-animated-wait']]: waitMode,
        [drum['drum-animated-interaction']]: animationInProgress
      })}
      onClick={() => playDrum(id)}
      style={{top: top, left: left}}
    >
      {button}
    </div>
  )
}