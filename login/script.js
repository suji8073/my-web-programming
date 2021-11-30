const api_url = "http://localhost:1337/Patients";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data[1]);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr>
          <th>p_name</th>
          <th>age</th>
          <th>sex</th>
          <th>memo</th>
         </tr>`;

  // Loop to access all rows
  for (let r of data.list) {
    tab += `<tr> 
    <td>${r.p_name} </td>
    <td>${r.age}</td>
    <td>${r.sex}</td> 
    <td>${r.memo}</td>          
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}
