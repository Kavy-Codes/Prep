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