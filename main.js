import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Kokböcker!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Jag kan inte hjälpa det, jag gillar kokböcker... 
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
