const chapters = [
  { title: "What is Psychology", img: "mindmaps/ch1.png" },
  { title: "Methods of Enquiry", img: "mindmaps/ch2.png" },
  { title: "Human Development", img: "mindmaps/ch3.png" },
  { title: "Learning", img: "mindmaps/ch4.png" },
  { title: "Learning", img: "mindmaps/ch5.png" },
  { title: "Memory", img: "mindmaps/ch6.png" },
  { title: "Thinking", img: "mindmaps/ch7.png" },
  { title: "Motivation & Emotion", img: "mindmaps/ch8.png" },
];

const list = document.getElementById("mindmapList");
const viewer = document.getElementById("mindmapViewer");
const image = document.getElementById("mindmapImage");

chapters.forEach(ch => {
  const div = document.createElement("div");
  div.className = "mindmap-item";
  div.innerText = ch.title;

  div.onclick = () => openMindmap(ch.img);

  list.appendChild(div);
});

function openMindmap(src) {
  image.src = src;
  viewer.classList.remove("hidden");
  list.style.display = "none";
}

function closeMindmap() {
  viewer.classList.add("hidden");
  list.style.display = "flex";
}
