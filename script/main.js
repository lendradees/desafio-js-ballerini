const userName = document.getElementById('name');
const userIdade = document.getElementById('idade');
const userSkills = document.getElementById('skills');

function mostrarUsuarios() {
    if (userName.value == "" || userIdade.value == "" || userSkills.value == "") {
        let erro = document.getElementById('alerta');
        erro.innerHTML = `<p>Por favor, preencha todos os campos!</p>`;        
    } else {
        let infos = document.getElementById('cadastrados');
        let erro = document.getElementById('alerta');
        infos.innerHTML = infos.innerHTML + `<ul><li>Nome: <span>${userName.value}</span></li><li>Idade: <span>${userIdade.value}</span></li><li>Skills: <span>${userSkills.value}</span></li></ul>`;
        erro.innerHTML = ``;
        document.getElementById('name').value='';
        document.getElementById('idade').value='';
        document.getElementById('skills').value='';
    }
} 
