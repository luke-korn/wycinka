

function main() {
  window.addEventListener('deviceorientation', onOrientationChange)
  navigator.mediaDevices.getUserMedia({video:{
    facingMode: 'environment'
  }})
    .then((signal) => {
      const video = document.getElementById("video")
      video.srcObject = signal
      console.log(video)
      video.play()
    })
    .catch ((err) => {
      alert(err)
    })
}

function onOrientationChange(event) {
  const info = document.querySelector("#heightInfo") 
  const test = document.querySelector("#test") 
  let angle = event.beta - 90
  test.innerHTML = angle
  if (angle < 0) angle = 0
  const slider = document.querySelector('#slider')
  const label = document.querySelector('#label')
  label.innerHTML = "Distance: " + slider.value
  const distance = slider.value
  const height = Math.tan(angle * Math.PI / 180) * distance
  info.innerHTML = height.toFixed(1) + ' m (' + angle.toFixed(1) + '&deg;)'
}

