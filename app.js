// const pupil = document.querySelector("#pupil");
// const pupilPath = document.querySelector("#pupilPath");

// let maxLength = pupilPath.getTotalLength();
// let stepLength = maxLength / 10; // Full path 10sec

// let then = 0,
//   position = 0;
// const step = (timestamp) => {
//   let timeInSec = timestamp * 0.001;
//   let deltaTime = timeInSec - then;
//   then = timeInSec;

//   position += stepLength * deltaTime;

//   let svgPoint = pupilPath.getPointAtLength(position);

//   pupil.style.cx = svgPoint.x;
//   pupil.style.cy = svgPoint.y;

//   if (position >= maxLength) position = 0;

//   requestAnimationFrame(step);
// };

// requestAnimationFrame(step);
