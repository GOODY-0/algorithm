function setup() {
  const buttons = document.querySelectorAll(".remove");
  
  buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const div = btn.parentNode;
        div.parentNode.removeChild(div)
    })
  })
}
