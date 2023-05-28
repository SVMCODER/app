document.getElementById('project').innerHTML = localStorage.getItem('project').replace('null', `
<div class='container'>
<h3>Create a Project</h3>
<button class='bx bx-plus'> Create</button>
</div>
<br>
`)