 <h1 align="center">Objetivo</h1>
  <p>O inuito deste projeto foi criar um sistema de notas utilizando HTML, CSS, um pouco de Bootstrap, e Javascript puro. <br> ⚠️ Para visualizar a estilização da aplicação basta acessar a pasta acima intitulada "Visualização do projeto".</p>
  
<br>

<h3 align="center"><b>Pontos relevantes sobre o projeto:</b></h3>
<p>Neste projeto é utilizado o <code>localStorage</code> para armazenar as notas que o usuário criou e impedir que após a página ser atualizada ou fechada o mesmo perca as suas anotações. Armazenando-as no browser. Como o HTML é utilizado para projetar o "esqueleto" do site, em primeira instância foi projetada a estrutura, em seguida, a estilização com o CSS, e por fim, adicionamos interações ao clicar no botão, com a linguagem Javascript.</p>

<br>
<h3 align="center">Alguns pontos relevantes sobre a estrutura em HTML:</h3> 
   <p>Para implementar o ícone de adição de nota importaremos uma URL do Font Awesome e adicionaremos ao <code>header</code> da seguinte forma:</p><br>
    
    <script src="https://kit.fontawesome.com/5eb2c51ffb.js" crossorigin="anonymous"></script>   
   
<ul>
    <li>O ícone (+) será adicionado dentro da estrutura utilizando a tag <code>i</code> e a classe font-awesome;</li>
    <li>Criaremos um formulário com a tag <code>form</code> que usaremos posteriormente para fazer as notas do sistema;</li>
    <li>Usando a tag de <code>button</code> criaremos um botão que será responsável por adicionar novas notas.</li>
  </ul>  
    
<br>

<h3 align="center">Estrutura CSS</h3>
  <p>Se tratando da folha de estilo foi utilizado uma estrutura de design responsivo visando o êxito e excelente visualização em qualquer dispositivo que o usuário esteja acessando. Utilizei CSS Reset com <code>margin</code> e <code>padding</code> em 0; Além de utilizar flex-box.</p>

<br>

<h3 align="center">Interatividade com Javascript</h3>
  <p>Trabalhamos com o uso de DOM (Document Object Model) para fazer as interações entre os arquivos html e css e javascript, maioritariamente como o uso de <code>document.querySelector</code>.</p>
  <ul>
     <li>Para armazenar os meses do ano foi apropriado manusear arrays;</li>
     <li>Utilizando o método <code>JSON.parse</code> foi possível armazenar o valor de <code>note</code> dentro do browser, guardando asssim, todas as informações das notas mesmo que a página seja recarregada;</li>
     <li>Além disso, foi criada uma função <b>anônima</b> dentro da qual será criada o formulário usando o evento "click" <code>Eventlistener</code>, quando o usuário clicar sobre o ícone o formulário de notas irá aparecer.</li>
  </ul>
    
#





















<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<h1>Goal</h1>
  <p>The purpose of this project was to create a note system using HTML, CSS, a little Bootstrap, and pure Javascript.</p>
<h3><b>Relevant points about the project:</b></h3>
In this project, <code>localStorage</code> is used to store the notes that the user created and prevent the user from losing his notes after the page is updated or closed. Storing them in the browser.<br></br>

  <p> as HTML is used to design the layout of the site, so we first create the layout, then style it, and finally add features to the button (on click, the button menu opens). Some relevant points about the HTML structure:</p>

  <ul>
<li>To implement the add note icon we will import a Font Awesome URL and add it to the <code>header</code> as follows: <br></br><code><script src="https:/ /kit.fontawesome.com/5eb2c51ffb.js" crossorigin="anonymous"></script></code></li></br>
<li>The (+) icon will be added inside the framework using the <code>i</code> tag and the font-awesome class.</li>
<li>We'll create a form with the <code>form</code> tag that we'll use later to make system notes</li>
<li>Using the <code>button</code> tag we will create a button that will be responsible for adding new notes</li>
  </ul>

<h3>CSS Structure</h3>
    <li>When it comes to the style sheet, a responsive design structure was used in order to have a good visualization on any device. I used CSS Reset with <code>margin</code> and <code>padding</code> at 0. Besides using flex-box.</li>

<h3>Interactivity with Javascript</h3>
  <li>The first obvious item of this project is the use of the DOM (document object model) to temporarily link HTML and CSS files with Javascript, mostly through the use of <code>document.querySelector</code> </li>

  <li>Arrays were used to store the months of the year</li>

  <li>Using the <code>JSON.parse</code> method, it was possible to store the value of <code>note</code> within the browser, keeping all the information of the notes even if the page is reloaded. </li>

  <li>Furthermore, an anonymous function was created inside which the form will be created, and using the "click" <code>Eventlistener</code> when the user clicks on the icon the notes form will appear.</li>
















