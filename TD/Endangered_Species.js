function endangeredSpecies(continent, species) {
  const ulList = document.querySelectorAll("ul");
  let result = '';
  
  ulList.forEach((ul) => {
    if(ul.dataset.continent === continent) {
      const liList = ul.querySelectorAll("li");
      liList.forEach((li) => {
        if(li.dataset.species === species) result = li.innerHTML 
      })
      }
  })
  return result
}
