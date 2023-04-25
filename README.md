 <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>
 
 <h1 align="center">Objetivo</h1>
  <p>O inuito deste projeto foi criar um sistema de notas utilizando HTML, CSS, um pouco de Bootstrap, e Javascript puro. <br> ⚠️ Para visualizar a estilização da aplicação basta acessar a pasta acima intitulada "Visualização do projeto".</p>
  
<br>

<h3 align="center"><b>Pontos relevantes sobre o projeto:</b></h3>
<p>Neste projeto é utilizado o <code>localStorage</code> para armazenar as notas que o usuário criou e impedir que após a página ser atualizada ou fechada o mesmo perca as suas anotações. Armazenando-as no browser. Como o HTML é utilizado para projetar o "esqueleto" do site, em primeira instância foi projetada a estrutura, em seguida, a estilização com o CSS, e por fim, adicionamos interações ao clicar no botão, com a linguagem Javascript.</p>

<br>
<h3 align="center">Considerações sobre a estrutura em HTML:</h3> 
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
    


































