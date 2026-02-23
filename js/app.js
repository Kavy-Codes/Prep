// =======================
// LOAD CHAPTERS (SAFE)
// =======================
fetch("data/chapters.json")
  .then(r => r.json())
  .then(data => {
    const c = document.getElementById("chapters");
    if (!c) return;

    c.innerHTML = "";

    // data is OBJECT, not array
    Object.values(data).forEach(ch => {
      c.innerHTML += `
        <div class="card">
          <h3>${ch.title}</h3>

          <b>📌 Definition:</b>
          <p>${ch.definitions.join(" ")}</p>

          <b>🧠 Key Points:</b>
          <ul>${ch.points.map(p => `<li>${p}</li>`).join("")}</ul>

          <b>❓ Expected Questions:</b>
          <ul>${ch.questions.map(q => `<li>${q}</li>`).join("")}</ul>

          <b>📊 Diagram:</b>
          <p>${ch.diagram}</p>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error(err);
    const c = document.getElementById("chapters");
    if (c) c.innerHTML = "<p>Failed to load chapters.</p>";
  });


// =======================
// RECALL MODE (OBJECT SAFE)
// =======================
let recallItems = [];
let recallIndex = 0;
let showingAnswer = false;

fetch("data/recall.json")
  .then(r => r.json())
  .then(data => {
    const box = document.getElementById("recallBox");
    if (!box) return;

    // Flatten object → array
    recallItems = Object.values(data).flat();

    box.innerText = recallItems[0];

    box.onclick = () => {
      recallIndex = (recallIndex + 1) % recallItems.length;
      box.innerText = recallItems[recallIndex];
    };
  })
  .catch(err => console.error(err));


// =======================
// COUNTDOWN (SAFE)
// =======================
const countdownEl = document.getElementById("countdown");
const examDate = new Date("2026-02-27T10:00:00").getTime();

if (countdownEl) {
  setInterval(() => {
    const now = Date.now();
    const diff = examDate - now;

    if (diff <= 0) {
      countdownEl.innerText = "EXAM TIME 💪";
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    countdownEl.innerText =
      `⏱ ${hours}h ${minutes}m left — You got this ❤️`;
  }, 1000);
}
