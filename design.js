
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "block";
  }
}
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) popup.style.display = "none";
}
function submitQuiz() {
  let score = 0;
  const form = document.getElementById('quiz-form');
  const result = document.getElementById('quiz-result');
  const resultText = document.getElementById('result-text');

  if (form.q1.checked) score++;
  if (form.q2.checked) score++;
  if (form.q3.checked) score++;
  if (form.q4.checked) score++;
  if (form.q5.checked) score++;

  result.style.display = "block";
  if (score >= 3) {
      resultText.textContent = "This post shows several signs of fake news. Be careful!";
  } else {
      resultText.textContent = "This post appears to be trustworthy. No significant signs of fake news were found.";
  }

  form.style.display = "none";
}
function showSourcePopup() {
  showPopup('popup-sources');
}
function showQuizPopup() {
  showPopup('quiz-popup');
}
const flagData = { '1': 0 }; 
function toggleFlag(postId) {
  const countEl = document.getElementById(`flag-count-${postId}`);
  const postEl = document.getElementById(`post-${postId}`);
flagData[postId] = Math.min(flagData[postId] + 1, 5);
  countEl.textContent = flagData[postId];

  if (flagData[postId] >= 5) {
      postEl.classList.add('flagged');
      setTimeout(() => {
          postEl.classList.remove('flagged');
          setTimeout(() => {
              postEl.classList.add('flagged');
          }, 50);
      }, 500);
  }
}
function showImgTooltip(postId) {
    const tooltip = document.getElementById(`img-tooltip-${postId}`);
    tooltip.style.display = 'block';
  }
  function hideImgTooltip(postId) {
    const tooltip = document.getElementById(`img-tooltip-${postId}`);
    tooltip.style.display = 'none';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const meters = document.querySelectorAll('.trust-meter');
    meters.forEach(meter => {
      const target = parseInt(meter.getAttribute('data-percentage'), 10);
      const fgCircle = meter.querySelector('.ring-fg');
      const textEl = meter.querySelector('.trust-text');
  const circumference = 176;
      let current = 0;
      const stepTime = 1000 / target;
      const animate = setInterval(() => {
        current++;
        if (current > target) {
          clearInterval(animate);
          return;
        }
        const offset = circumference * (1 - current / 100);
        fgCircle.style.strokeDashoffset = offset;
        textEl.textContent = current + '%';
      }, stepTime);
      meter.querySelector('.ring-fg').style.stroke = getColorFor(target);
    });
  });
  function getColorFor(pct) {
    if (pct <= 20)  return '#e74c3c'; 
    if (pct <= 40)  return '#e67e22'; 
    if (pct <= 60)  return '#f1c40f';
    if (pct <= 80)  return '#27ae60'; 
    return '#2ecc71';              
  }
function toggleDeepDive(postId) {
    const deepDive = document.getElementById(`deep-dive-${postId}`);
    const btn = document.querySelector(`#post-${postId} .deep-dive-toggle`);
    if (deepDive.style.display === 'block') {
      deepDive.style.display = 'none';
      btn.textContent = 'Mehr Details…';
    } else {
      deepDive.style.display = 'block';
      btn.textContent = 'Weniger Details';
    }
  }
      