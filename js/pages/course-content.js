const banGraph = document.querySelector('.graphic-tilt');

  function randomTilt() {
    const max = 12;
    let deg = Math.ceil(Math.random() * max);
    const neg = Math.round(Math.random())
    if (neg === 0) {
      deg = deg * -1;
    }
    return `${deg}deg`;
  }

  banGraph && banGraph.setAttribute('style', `--tilt: ${randomTilt()};`);