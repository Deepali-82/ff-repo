// api url 
const api_url ="https://api.collegefootballdata.com/teams";
		
  
// Defining async function 
async function getTeams(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(data); 
    if (response) { 
        hideloader(); 
    } 
    show(data); 
} 
// Calling that async function 
getTeams(api_url); 
// Function to hide the loader 
function hideloader() { 
    document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
    let tab =  
        `<tr> 
          <th>Abbreviation</th> 
          <th>alt_color</th> 
          <th>color</th> 
          <th>Conference</th> 
		  <th>Division</th> 
          <th>Logos</th> 
          <th>Mascot</th> 
          <th>School</th> 
         </tr>`; 
    
    // Loop to access all rows  
	
   for(let r of data.list) 
   {	
     tab+=`<tr>  
    <td>${r.abbreviation}</td> 
    <td>${r.alt_color}</td> 
    <td>${r.color}</td>  
    <td>${r.conference}</td> 
	<td>${r.division} </td> 
    <td>${r.logos}</td> 
    <td>${r.mascot}</td>  
    <td>${r.school}</td>	
</tr>`; 
    
   }
	// Setting innerHTML as tab variable 
    document.getElementById("teams").innerHTML = tab; 
} 