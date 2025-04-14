function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  const section = document.getElementById(sectionId);
  section.classList.add("active");
  triggerTyping(section);
}

function triggerTyping(section) {
  section.querySelectorAll(".typing-text, .typing-paragraph").forEach(el => {
    if (!el.dataset.typed) {
      const text = el.dataset.text;
      let i = 0;
      el.dataset.typed = true;
      function type() {
        if (i < text.length) {
          el.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, 50);
        }
      }
      type();
    }
  });
}

function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function toggleEducation() {
  document.getElementById("education-details").classList.toggle("show");
}

window.onload = () => {
  triggerTyping(document.getElementById("home"));
};