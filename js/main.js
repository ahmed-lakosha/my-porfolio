// nave bottom

document.querySelector(".open-btn").addEventListener("click", function (e) {
  this.classList.add("d-none");
  document.querySelector(".close-btn").classList.remove("d-none");
  document.querySelector("#nav-s").classList.add("active");
});
document.querySelector(".close-btn").addEventListener("click", function (e) {
  this.classList.add("d-none");
  document.querySelector(".open-btn").classList.remove("d-none");
  document.querySelector("#nav-s").classList.remove("active");
});
// nave bottom
// animation
async function init() {
  const node = document.querySelector("#type-text");

  await sleep(1000);
  node.innerText = "";
  await node.type("I`m ,");

  while (true) {
    await node.type("Designer");
    await sleep(2500);
    await node.delete("Designer");
    await node.type("Developer");
    await sleep(2500);
    await node.delete("Developer");
    await node.type("Freelancer");
    await sleep(2500);
    await node.delete("Freelancer");
    await node.type("Programer");
    await sleep(2500);
    await node.delete("Programer");
  }
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 100 * Math.random();
    return randomMs < 50 ? 10 : randomMs;
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character;
      await sleep(this.typeInterval);
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1);
      await sleep(this.typeInterval);
    }
  }
}

customElements.define("type-async", TypeAsync, { extends: "span" });

init();
// animation
// ul active
document.querySelectorAll("#por li").forEach((li) =>
  li.addEventListener("click", function (e) {
    document
      .querySelectorAll("#por li")
      .forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
    if (this.getAttribute("data-imgs") === "app") {
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.add("d-none"));
      document
        .querySelectorAll(".app")
        .forEach((img) => img.classList.remove("d-none"));
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.remove("skalout"));
      document
        .querySelectorAll(".app")
        .forEach((img) => img.classList.add("skalout"));
    } else if (this.getAttribute("data-imgs") === "bug") {
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.add("d-none"));
      document
        .querySelectorAll(".bug")
        .forEach((img) => img.classList.remove("d-none"));
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.remove("skalout"));
      document
        .querySelectorAll(".bug")
        .forEach((img) => img.classList.add("skalout"));
    } else if (this.getAttribute("data-imgs") === "web") {
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.add("d-none"));
      document
        .querySelectorAll(".web")
        .forEach((img) => img.classList.remove("d-none"));
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.remove("skalout"));
      document
        .querySelectorAll(".web")
        .forEach((img) => img.classList.add("skalout"));
    } else {
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.remove("d-none"));
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.remove("skalout"));
      document
        .querySelectorAll(".bot-i")
        .forEach((img) => img.classList.add("skalout"));
    }
  })
);
// ul active
// scroll function
document
  .querySelector(".scrol-btn")
  .addEventListener("click", () => window.scrollTo(0, 0));
let all = document.querySelector("body").scrollHeight;
let landing = document.querySelector("#landing").scrollHeight;
let about = document.querySelector("#about").scrollHeight;
let facts = document.querySelector("#facts").scrollHeight;
let skills = document.querySelector("#skills").scrollHeight;
let resume = document.querySelector("#resume").scrollHeight;
let portfolio = document.querySelector("#portfolio").scrollHeight;

// scroll function
