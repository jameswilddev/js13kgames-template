var snareGain = audioContext.createGain()
snareGain.gain.value = 0
var snareBandpass = audioContext.createBiquadFilter()
snareBandpass.type = "bandpass"
snareBandpass.frequency.value = 1800
snareBandpass.Q.value = 0.9
whiteNoise.connect(snareGain)
snareGain.connect(snareBandpass)
snareBandpass.connect(audioContext.destination)

var snareOscillator = audioContext.createOscillator()
snareOscillator.type = "triangle"
var snareOscillatorGain = audioContext.createGain()
snareOscillatorGain.gain.value = 0
snareOscillator.connect(snareOscillatorGain)
snareOscillatorGain.connect(audioContext.destination)
snareOscillator.start(0)

function snare(inBeats) {
  var startTime = time + inBeats * secondsPerBeat
  snareGain.gain.setValueAtTime(1, startTime)
  snareBandpass.frequency.setValueAtTime(2000, startTime)
  snareOscillatorGain.gain.setValueAtTime(1, startTime)
  snareOscillator.frequency.setValueAtTime(100, startTime)

  snareGain.gain.linearRampToValueAtTime(0.4, startTime + 0.1)
  snareGain.gain.linearRampToValueAtTime(0, startTime + 0.2)
  snareBandpass.frequency.linearRampToValueAtTime(1000, startTime + 0.15)
  snareOscillatorGain.gain.linearRampToValueAtTime(0, startTime + 0.08)
  snareOscillator.frequency.linearRampToValueAtTime(0, startTime + 0.08)
}
