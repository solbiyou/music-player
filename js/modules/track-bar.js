const TrackBar = (_ => {
  //state
  const state = {
    currentTrackTime: 0,
    fullTrackTime: 0,
    barWidth: 0
  }

  //cache DOM
const trackBarEl = document.querySelector('.track-bar');
const trackBarFillEl = document.querySelector('.track-bar__fill');

const init = _ => {
  render();
}

const render = _ => {
  trackBarFillEl.style.width = `${state.barWidth}%`;
}

const getPercent = (current, full) => {
  return (current/full)*100;
}

const setState = obj => {
  state.currentTrackTime = obj.currentTime;
  state.fullTrackTime = obj.duration;
  state.barWidth = getPercent(state.currentTrackTime, state.fullTrackTime);
  render();
}
return {
  init,
  setState
}
})();

export default TrackBar;