 <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>

 <h1 align="center">Target</h1>
    <p>The target of this project it was to make a note system using css, html, a little bit bootstrap framework, and vanilla javascript. To view the application's styling, just access the folder above entitled "Project Layout".</p>


<h3 align="center"><b>Relevant points about the project:</b></h3>
<p>In this project, <code>localStorage</code> is used to store the notes that the user has created and prevent the user from losing his notes after the page is updated or closed. Storing it as no browser. As HTML is used to design the "skeleton" of the site, in the first instance the structure was designed, then the styling with CSS, and finally, we add it when the button is clicked, with the Javascript language.</p>

<br>
<h3 align="center">HTML Structure Considerations:</h3>
     <p>To implement the add note icon, we'll import a Font Awesome URL and add it to the <code>header</code> as follows:</p><br>
    
      <script src="https://kit.fontawesome.com/5eb2c51ffb.js" crossorigin="anonymous"></script>
   
<ul>
      <li>The (+) icon will be added inside the framework using a <code>i</code> tag and a font-awesome class;</li>
      <li>We will create a form with the <code>form</code> tag that we will use later to make system notes;</li>
      <li>Using the <code>button</code> tag we will create a button that will be responsible for adding new notes.</li>
    </ul>
    
<br>

<h3 align="center">CSS Structure</h3>
    <p>When it comes to the style sheet, a responsive design structure was used, aiming at success and excellent visualization on any device that the user is accessing. I used CSS Reset with <code>margin</code> and <code>padding</code> at 0; In addition to using the flex-box.</p>

<br>

<h3 align="center">Interactivity with Javascript</h3>
    <p>We work with the use of DOM (Document Object Model) to make happy connections between html and css and javascript files, mainly with the use of <code>document.querySelector</code>.</p>
    <ul>
       <li>To store the months of the year it was appropriate to handle arrays;</li>
       <li>Using the <code>JSON.parse</code> method, it was possible to store the value of <code>note</code> within the browser, thus saving all the information of the notes even if the page is reloaded;< /li>
       <li>Furthermore, an <b>anonymous</b> function was created within which the form will be created using the "click" event <code>Eventlistener</code>, when the user clicks on the form's icon. the notes will appear.</li>
    </ul>
