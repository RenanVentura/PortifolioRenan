// Função para rolar suavemente até a seção ao clicar no menu
const linksCabecalho = document.querySelectorAll(".lista-cabecalho a");
linksCabecalho.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const secao = document.querySelector(href);
      if (secao) {
        secao.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Função para copiar e-mail ao clicar
const emailP = document.querySelector("section#contatos p");
if (emailP) {
  emailP.addEventListener("click", function () {
    const email = "renan.al.ventura@gmail.com";
    navigator.clipboard.writeText(email);
    emailP.title = "E-mail copiado!";
    setTimeout(() => {
      emailP.title = "";
    }, 1500);
  });
}
