<h1>Node.js REST api</h1>
<h3>Implementation details</h3>
<ul>
  <li>Implemented using JavaScript backend/middleware framework <strong><a href='http://expressjs.com'>Express</a></strong></li>
  <li>Implemented on <strong>EcmaScript 6</strong> (ES2015) without jQuery</li>
  <li>Code broken into logical components that interact with each other - created <strong>5 services for different purposes</strong> (command line, work with files, status-handler, router, validation service)</li>
  <li>All stages of logic/checks/requests are displayed in the server console with the corresponding <strong>colored console logs</strong> - red errors, green success, yellow warnings and blue information</li>
  <li>All service methods are documented in detail in the <strong>JSDoc</strong> format</li>
  <li>4 level <strong>validation</strong> system:
    <ul>
      <li>Check entered --watch command line argument</li>
      <li>Chech file existed in specified file path</li>
      <li>Check ".json" extension for specified file (e.g. not .txt)</li>
      <li>Check correct JSON format of file</li>
    </ul>
  </li>
</ul>

<h3>Local deploy</h3>
<ol>
  <li>Install Node v8 and nmp v5</li>
  <li>Clone this repo</li>
  <li>Enter in console <pre>$ node jsonserver.js --watch db.json</pre> to start server<li>
  <li>You can place another JSON-file to folder and try it with <pre>$ node jsonserver.js --watch {file-name}.json</pre>
  <li>You can check API using curl if you install it and setup in environment variables. Enter <pre>$ curl http://localhost:8080/students</pre> for test first API endpoint</li>
  <li>You can check API through browser. Just open <a href='http://localhost:8080/students'>http://localhost:8080/students</a> for test first API endpoint</li>
</ol>

<h3>Exercise</h3>
<h4>Introduction</h4>
<p>Develop a fake rest API for test purpose.</p>
<p><a href='http://www.filltext.com/'>FillText.com</a> can be taken as a good example</p>

<h4>Description</h4>
<p>Based on a JSON text file with the following structure, the application should create the end points of the API</p>
<pre>
{
  "students":[
    { "id":1, "name": "John Smith", "age": 31 },
    { "id":2, "name": "Veronika", "age": 25 },
    { "id":3, "name": "Pitter Bill", "age": 28 }    
  ],
  "companies": [
    { "id":1, "name": "Microsoft", "city": "California" },
    { "id":2, "name": "Apple", "city": "New York" },
    { "id":3, "name": "Google", "city": "Seattle" }
  ]
}
</pre>

<p>For the JSON above, the following end point should be created:</p>
<ul>
  <li>http://localhost:8080/students - should return students array</li>
  <li>http://localhost:8080/students/1 - should return the student with Id = 1</li>
  <li>http://localhost:8080/students/2 - should return the student with Id = 2</li>
  <li>http://localhost:8080/students/3 - should return the student with Id = 2</li>
  <li>http://localhost:8080/companies - should return company array</li>
  <li>http://localhost:8080/companies/1 - should return the company with Id = 1</li>
  <li>http://localhost:8080/companies/2 - should return the company with Id = 2</li>
  <li>http://localhost:8080/companies/3 - should return the company with Id = 3</li>  
</ul>

<p>Only <strong>GET</strong> method is supported</p>
<p>Of course, the above end point of the API must be dynamic according to the given JSON file</p>

<h4>How to start the project?</h4>
<pre>$ node jsonserver.js --watch db.json</pre>

<h4>What we’re looking for</h4>
<ul>
  <li>Well written code broken into logical components that interact with each other.</li>
  <li>“vanilla” NodeJs and JavaScript implementation a big plus or good framework implementation.</li>
  <li>Avoid using jQuery.</li>
  <li>Good and useful console log</li>
</ul>
