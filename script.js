(function(doc, win) {
  'use strict'

  const database = [
    {
      color: 'mock',
      iconSymbol: 'mock',
      iconCode: 'mock',
      commit: 'mock',
      code: 'mock',
      aWord: 'mock',
      descriptionSubtitled: 'mock',
      descriptionDubbed: 'mock'
    }
  ]


  for(let index = 0; index < database.length; index++) {
    doc.querySelector(`body`).innerHTML += `
      <article id='${index}'>
        <header style='background-color: ${database[index].color};'>
          <a>${database[index].iconSymbol}</a>

          <div hidden>
            <p>${database[index].iconSymbol} <strong>Commit:</strong> ${database[index].commit}</p>
            <p>${database[index].descriptionDubbed}</p>
          </div>
        </header>

        <main
          title="Descrição não traduzida: ${database[index].descriptionSubtitled}"
        >
          <p>${database[index].aWord}</p>
        </main>
      </article>
    `

    doc.querySelectorAll("article").forEach((article) => {
      article.addEventListener("click", () => {
        article.querySelectorAll("a").forEach((a) => {
          article.querySelectorAll("div").forEach((div) => {
            if (div.hasAttribute("hidden")) {
              a.setAttribute("hidden", "")
              div.removeAttribute("hidden")
            } else {
              a.removeAttribute("hidden")
              div.setAttribute("hidden", "")
            }
          })
        })

      })
    })
  }
})(document, window)
