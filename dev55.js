console.log("hello world");
const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;
const server =http.createServer( (req,res)=>{
 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is Devendra rahangdale');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=, initial-scale=1.0">
      <title>Alignment</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <style>
          * {
              box-sizing: border-box;
          }
  
  
          body {
              font-family: 'Tilt Prism', cursive;
          }
  
  
  
          .container {
              width: 900px;
              border: 5px solid rgb(205, 23, 23);
              margin: 44px auto;
              background-color: rgb(20, 172, 86);
  
  
          }
  
          .item {
              border: 3px solid gray;
              margin: 12px 3px;
              padding: 12px 3px;
              background: rgb(161, 214, 226);
  
  
          }
  
          #fruit {
              float: left;
              width: 48%;
              text-align: center;
              margin: 14pxpx;
  
          }
  
          #computer {
  
           display: block;
           
              float: right;
              width: 48%;
              text-align: center;
              align-items: center;
  
  
          }
  
          #stationary {
  
              /* float: left; */
              clear: both;
              width: 100%;
  
  
          }
          p,h1{
              /* text-align: right;
              text-align: left;
              text-align: center;
          } */
          text-justify: justify;
      }
      
      </style>
  </head>
  
  <body>
      <!-- <h1 id="DEV">WELCOME TO MY STORE</h1> -->
      <div class="container">
          <h1>WELCOME TO MY STORE</h1>
          <div id="fruit" class="item">
              <h3>fruit</h3>
              <p id="fruit" class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo eius nisi
                  velit numquam et, consequatur, ut in ipsum corrupti laboriosam ab dolorem iste nemo nulla cupiditate
                  quibusdam sint quas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eum totam
                  quibusdam ipsum commodi reprehenderit soluta consequatur odit. Quia, facilis maiores similique
                  repellendus qui laudantium possimus ad debitis, unde, iste quis itaque dolore veniam! </p>
          </div>
  
  
          <div id="computer" class="item">
              <h3>computer</h3>
              <p id="computer" class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo eius nisi
                  velit numquam et, consequatur, ut in ipsum corrupti laboriosam ab dolorem iste nemo nulla cupiditate
                  quibusdam sint quas?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cumque optio
                  quod ea id dicta delectus eaque, eligendi voluptates voluptatem esse natus fugit. Quis sit architecto
                  voluptas. Maxime laudantium delectus est ab magni exercitationem! </p>
  
          </div>
  
          <div id="stationary" class="item">
              <h3>stationary</h3>
              <p id="stationary" class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo eius
                  nisi velit numquam et, consequatur, ut in ipsum corrupti laboriosam ab dolorem iste nemo nulla
                  cupiditate quibusdam sint quas? </p>
  
          </div>
  
          <div id="glasses" class="item">
              <h3>Glasses</h3>
              <p id="glasses" class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo eius
                  nisi velit numquam et, consequatur, ut in ipsum corrupti laboriosam ab dolorem iste nemo nulla
                  cupiditate quibusdam sint quas? </p>
  
          </div>
  
      </div>
  </body>
  
  </html>`);

    });
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
