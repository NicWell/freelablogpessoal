function newdate() {
    data = new Date;
    monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
    console.log(typeof (data.getDate()));
    document.getElementById("data-atual").innerHTML = `<span>${data.getDate()} de ${monName[data.getMonth()]}, ${data.getFullYear()}</span>`;
}
newdate();