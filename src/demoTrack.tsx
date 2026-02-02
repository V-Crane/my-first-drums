import type {Track} from "./useDrums.tsx";

const startTime = Date.now();

export const demoRockTrack: Track = {
  name: "Demo",
  record: [
    {id: 'kick', timestamp: new Date(startTime)},
    {id: 'boom', timestamp: new Date(startTime)},
    {id: 'hihat', timestamp: new Date(startTime + 250)},
    {id: 'snare', timestamp: new Date(startTime + 500)},
    {id: 'hihat', timestamp: new Date(startTime + 750)},
    {id: 'kick', timestamp: new Date(startTime + 1000)},
    {id: 'hihat', timestamp: new Date(startTime + 1000)},
    {id: 'hihat', timestamp: new Date(startTime + 1100)},
    {id: 'hihat', timestamp: new Date(startTime + 1200)},
    {id: 'hihat', timestamp: new Date(startTime + 1300)},
    {id: 'snare', timestamp: new Date(startTime + 1500)},
    {id: 'kick', timestamp: new Date(startTime + 1750)},
    {id: 'kick', timestamp: new Date(startTime + 1850)},
    {id: 'openhat', timestamp: new Date(startTime + 2000)},
  ]
};