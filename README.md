#  🧵 Objetivo
<p>O inuito desse projeto foi criar um site sistema de notas utilizando HTML, CSS, um pouco de Bootstrap, e Javascript.</p>
<h3><b>Pontos relevantes sobre o projeto:</b></h3>

<ul>
<li>.</li>
<li>.</li>
<li>.</li>
<li>.</li>
</ul>

<h3>Sobre o CSS</h3>

<ul>
<li>.</li>
</ul>

<h3>Sobre o Javascript</h3>
<ul>
<li>.</li>
</ul>






















# 🪡 Objetivo
<p>O objetivo deste projeto foi criar um transcritor de áudio para texto feito com HTML, CSS e Javascript puro.</p>
<h1>Sobre o Projeto</h1> 
<li> Optei por um HTML e CSS simples e funcional. No que tange o estilo da página, construi algumas animações com os pseudo-elementos <code>after</code> e <code>before</code>, além do <code>hover</code>, com o intuito de deixar o botão de gravação de áudio visualmente bacana e intuitivo para o usuário. É válido ressaltar que todas as principais medidas estão em porcentagens visando a responsividade da página.</li><br>

<li>Se tratando do Javascript utilizei fundamentalmente os métodos de array: <code>from</code>, <code>map</code> e <code>join</code>. Além disso, utilizei a API Web Speech que é uma API de reconhecimento de voz implementada no Chorome 25 e superiores. Por esse motivo, este projeto <b>não</b> funcionará em qualquer outro browser que <b>não</b> seja o Chorome 25 (ou superior).</li></br>

<p>A API Web Speech constitui-se com a privacidade dos utilizadores, pois antes de ativar a voz através do microfone, o utilizador deve autorizar a execução (por meio de um alert). A API contempla o objeto <code>SpeechRecognition</code>, o primeiro passo então foi verificar se o browser o qual o usuário está utilizando suporta esse objeto. Neste caso, como não setei nenhuma condicional, se o usuário utilizar o Mozilla, que não possui suporte, por exemplo, não aparecerá nenhuma mensagem para o mesmo. O programa apenas não irá funcionar.</p>

<li>A constante <code>transcript</code> armazena o texto que informa o que o utilizador/usuário falou. A outra constante: <code>recognition</code>, é utilizada para reconhecer a voz do usuário. Para reconhecer a fala continuamente foi necessário colocar a propriedade <code>continuos</code> como <code>true</code>. Desta forma o reconhecedor de voz não para de ouvir mesmo que tenha pausas na fala do usuário. A função <code>result</code> define um <code>callback</code> que é disparado quando o reconhecedor de voz devolve um resultado. A propriedade <code>results</code> é um array de objetos em que cada item do array armazena um possível resultado de reconhecimento de voz.</li>

<h1>Entendendo os métodos de array</h1>
<h2>map()</h2>
<p>A <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map">mdn</a> revela que esse método invoca a função <code>callback</code> passada por argumento para cada elemento do array e devolve um novo array como resultado. Se tratando do código do projeto a função callback passada na método map é <code>result</code>.</p>
<h3>Sintaxe ⤵️</h3>
<code>arr.map(callback[, thisArg])</code><br></br>
<h2>from()</h2>
<p>Segundo a <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from">mdn</a> o método <code>from</code> cria uma nova instância de um array quando for passado um array-like ou um iterable object (como foi utilizado no projeto) como argumento. Os objetos iteráveis permitem coletar seus elementos, assim como <code>map</code>.
<h2>join()</h2>
<p>Este método é usado para juntar os elementos de um array em uma string. Os elementos da string serão separados por um separador especificado e seu valor padrão é uma vírgula (,). No código do projeto o <code>join</code> junta os elementos do array em uma string usando '' (string vazia).</p>
