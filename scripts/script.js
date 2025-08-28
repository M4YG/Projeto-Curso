// Seleciona o formulário
const form = document.querySelector("form.FormCardContainer");

// Variáveis globais
let dadosUsuario = {
  nome: "",
  email: "",
  senha: "",
  imagem: null
};

// Cria a seção de resultados
let secaoResultado = document.createElement("section");
secaoResultado.id = "dadosUsuario";
secaoResultado.style.marginTop = "10px";
form.insertAdjacentElement("afterend", secaoResultado);

// Cria o título antes da div de resultados
let tituloDiv = document.createElement("h1");
tituloDiv.className = "FormTitleDados";
tituloDiv.textContent = "Dados";
tituloDiv.style.display = "none"; // começa escondido

// Adiciona atributos do AOS
tituloDiv.setAttribute("data-aos", "fade-in");       // efeito fade-in
tituloDiv.setAttribute("data-aos-delay", "600");     // delay

secaoResultado.appendChild(tituloDiv);

// Cria a div para os dados
let divResultado = document.createElement("div");
divResultado.id = "resultado";
secaoResultado.appendChild(divResultado);

// Evento de submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Captura os valores
  dadosUsuario.nome = document.getElementById("nomeusuario").value;
  dadosUsuario.email = document.getElementById("emailusuario").value;
  dadosUsuario.senha = document.getElementById("senhausuario").value;
  dadosUsuario.imagem = form.querySelector("input[type='file']").files[0];

  // Preview imagem
  let preview = "";
  if (dadosUsuario.imagem) {
      preview = `<img data-aos="fade-in" data-aos-delay="400" src="${URL.createObjectURL(dadosUsuario.imagem)}" width="100" style="border-radius:30%; margin-top:10px;">`;
  }

  // Mostra o título
  tituloDiv.style.display = "block";

  // Atualiza o AOS para aplicar a animação
  AOS.refresh();

  // Insere os dados na div
  divResultado.innerHTML = `
    ${preview}
    <p class="DadosInfo" data-aos="fade-in" data-aos-delay="400"><b class="DadosLabel">Nome:</b> ${dadosUsuario.nome}</p>
    <p class="DadosInfo" data-aos="fade-in" data-aos-delay="400"><b class="DadosLabel">Email:</b> ${dadosUsuario.email}</p>
  `;
});
