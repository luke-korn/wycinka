

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
  let angle = event.beta - 90
  if (angle < 0) angle = 0
  const slider = document.querySelector('#slider')
  const label = document.querySelector('#label')
  console.log(slider.value) 
  label.innerHTML = "Distance: " + slider.value
  const distance = slider.value
  const height = Math.tan(angle * Math.PI / 180) * distance
  console.log('height;', height)
  info.innerHTML = height.toFixed(1) + ' m (' + angle.toFixed(1) + '&deg;)'
  console.log(height * 20)
}

