#  🧵 Objetivo
<p>O inuito desse projeto foi criar um sistema de notas utilizando HTML, CSS, um pouco de Bootstrap, e Javascript puro.</p>
<h3><b>Pontos relevantes sobre o projeto:</b></h3>
Neste projeto é utilizado o <code>localStorage</code> para armazenar as notas que o usuário criou e impedir que após a página ser atualizada ou fechada o mesmo perca as suas anotações. Armazenando-as então no browser.<br></br>

Como o HTML é usado para projetar o layout do site então, primeiro criamos o layout, depois estilizamos e, finalmente, adicionamos recursos ao botão (ao clicar, o menu do botão é aberto). Alguns pontos relevantes sobre a estrutura HTML:
<ul>
<li>Para implementar o ícone de adição de nota importaremos uma URL do Font Awesome e adicionaremos ao <code>header</code> da seguinte forma: <br></br><code><script src="https://kit.fontawesome.com/5eb2c51ffb.js" crossorigin="anonymous"></script></code></li></br>
<li>O ícone (+) será adicionado dentro da estrutura utilizando a tag <code>i</code> e a classe font-awesome.</li>
<li>Criaremos um formulário com a tag <code>form</code> que usaremos posteriormente para fazer as notas do sistema</li>
<li>Usando a tag de <code>button</code> criaremos um botão que será responsável por adicionar novas notas</li>
</ul>

<h3>Estrutura CSS</h3>
<li>Se tratando da folha de estilo foi utilizado uma estrutura de design responsivo visando a boa visualização em qualquer dispositivo. Utilizei CSS Reset com <code>margin</code> e <code>padding</code> em 0. Além de utilizar flex-box.</li>


<h3>Interatividade com Javascript</h3>
<li>O primeiro item evidente deste projeto é o uso de DOM (document object model) para fazer as interações entre os arquivos HTML e CSS com o Javascript, atráves de, maioritariamente o uso do <code>document.querySelector</code></li>

<li>Foi utilizado arrays para armazenar os meses do ano</li>

<li>Utilizando o método <code>JSON.parse</code> foi possível armazenar o valor de <code>note</code> dentro do browser, guardando asssim todas as informações das notas mesmo que a página seja recarregada. </li>

<li>Além disso foi criado uma função anônima dentro da qual será criado o formulário, e usando o "click" <code>Eventlistener</code> quando o usuário clicar sobre o ícone o formulário de notas irá aparecer.</li>

<li></li>




















