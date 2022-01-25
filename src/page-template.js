function generatePage(data) {
    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile generator</title>
    <link rel="stylesheet" href="./assets/style.css">
  </head>
  
  <body>
    ${renderTeam()}
  </body>
  </html>
      `;

};


const renderTeam = (data) => {
    if (data.role === 'Engineer') {
        renderEnginner = () => {
            return `
            <div class="card">
                <div class="container">
                    <h2>${data.engineername}</h2>
                    <h2>${data.role}</h2>
                    <h4> ID: ${data.engineerID}</h4>
                    <h4> Github: ${data.github}
                </div>
            </div>`
        }
    } else if (data.role === 'Intern') {
        renderEnginner = () => {
            return `
            <div class="card">
                <div class="container">
                    <h2>${data.internname}</h2>
                    <h2>${data.role}</h2>
                    <h4> ID: ${data.internID}</h4>
                    <h4> School: ${data.school}
                </div>
            </div>`
        }
    } else {
        return `
        <div class="card">
            <div class="container">
                <h2>${data.managername}</h2>
                <h2>${data.role}</h2>
                <h4> ID: ${data.managerID}</h4>
                <h4> Office Number: ${data.office}
            </div>
        </div>`
    }

};



module.exports = generatePage;