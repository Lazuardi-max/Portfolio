    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Typing effect
    const textList = [
      "Web Developer",
      "Frontend Developer",
      "Visual Designer",
      "Creative Content Creator"
    ];
    const typingElement = document.querySelector(".typing");
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = textList[index];
      const visibleText = currentText.substring(0, charIndex);
      typingElement.textContent = visibleText;

      if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) index = (index + 1) % textList.length;
        setTimeout(type, 1000);
      }
    }

    type();