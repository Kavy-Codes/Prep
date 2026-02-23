// Load chapters
fetch("data/chapters.json")
  .then(r => r.json())
  .then(data => {
    const c = document.getElementById("chapters");
    if (!c) return;
    data.forEach(ch => {
      c.innerHTML += `
        <div class="card">
          <h3>${ch.title}</h3>
          <b>Definition:</b> ${ch.definition}<br><br>
          <b>Key Points:</b>
          <ul>${ch.points.map(p => `<li>${p}</li>`).join("")}</ul>
          <b>Questions:</b>
          <ul>${ch.questions.map(q => `<li>${q}</li>`).join("")}</ul>
        </div>
      `;
    });
  });

// Recall
let recallIndex = 0;
let showAnswer = false;

fetch("data/recall.json")
  .then(r => r.json())
  .then(data => {
    const box = document.getElementById("recallBox");
    if (!box) return;

    box.onclick = () => {
      if (!showAnswer) {
        box.innerText = data[recallIndex].q;
        showAnswer = true;
      } else {
        box.innerText = data[recallIndex].a;
        recallIndex = (recallIndex + 1) % data.length;
        showAnswer = false;
      }
    };
  });


const examDate = new Date("2026-02-27T10:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = examDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "EXAM TIME ";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `⏱ ${hours}h ${minutes}m left , You got this !`;
}, 1000);
