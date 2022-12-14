document.querySelector(".open-btn").addEventListener("click", function (e) {
this.classList.add("d-none");
document.querySelector(".close-btn").classList.remove("d-none");
document.querySelector("#nav-s").classList.add("active");
})
document.querySelector(".close-btn").addEventListener("click", function (e) {
this.classList.add("d-none");
document.querySelector(".open-btn").classList.remove("d-none");
document.querySelector("#nav-s").classList.remove("active");
})

async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.innerText = ""
    await node.type('I`m ,')
    
    while (true) {
      await node.type('Designer')
      await sleep(2500)
      await node.delete('Designer')
      await node.type('Developer')
      await sleep(2500)
      await node.delete('Developer')
      await node.type('Freelancer')
      await sleep(2500)
      await node.delete('Freelancer')
      await node.type('Programer')
      await sleep(2500)
      await node.delete('Programer')
    }
  }
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  