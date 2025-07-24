particlesJS("particles-js", {
  particles: {
    number: { value: 130 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
    }
  }
});
function openModal(src) {
  document.getElementById("modalImg").src = src;
  document.getElementById("certModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll('.bar');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-bar');
        obs.unobserve(entry.target); // Only once
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    observer.observe(bar);
  });
});




window.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skills');
  const skillCircles = document.querySelectorAll('.skill-circle');
  let animationStarted = false;

  // Helper: is element in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight - 100 && rect.bottom >= 0;
  }

  function animateSkills() {
    if (animationStarted) return; // run only once
    animationStarted = true;

    skillCircles.forEach(circle => {
      const progress = circle.querySelector('.progress');
      const percentText = circle.querySelector('.percentage-text');
      const targetPercent = parseInt(circle.dataset.percent);
      const radius = 45;
      const circumference = 2 * Math.PI * radius;

      progress.style.strokeDasharray = `${circumference}`;
      progress.style.strokeDashoffset = `${circumference}`;
      progress.style.transition = 'stroke-dashoffset 0.3s ease';

      const duration = 2000;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let currentFrame = 0;

      function animate() {
        currentFrame++;
        const progressRatio = currentFrame / totalFrames;
        const currentPercent = Math.min(progressRatio, 1) * targetPercent;
        const offset = circumference - (currentPercent / 100) * circumference;

        progress.style.strokeDashoffset = offset;
        percentText.textContent = `${Math.floor(currentPercent)}%`;

        // color gradient
        if (currentPercent <= 30) {
          progress.style.stroke = '#ee1800'; // red
        } else if (currentPercent <= 60) {
          progress.style.stroke = '#e96e02'; // orange
        } else {
          progress.style.stroke = '#02c654'; // green
        }

        if (currentFrame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          percentText.textContent = `${targetPercent}%`;
        }
      }

      animate();
    });
  }

  // Run on scroll
  function onScroll() {
    if (isInViewport(skillsSection)) {
      animateSkills();
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  // If section already in view
  if (isInViewport(skillsSection)) {
    animateSkills();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const certificateCards = document.querySelectorAll('.certificate-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.3
  });

  certificateCards.forEach(card => {
    observer.observe(card);
  });
});



  const items = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.3
  });

  items.forEach(item => {
    observer.observe(item);
  });




  document.querySelectorAll('.footer-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

