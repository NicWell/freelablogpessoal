function datasocial() {
    data = new Date;
    //monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
    //console.log(typeof (data.getDate()));
    document.getElementById("fotSocial").innerText = `${data.getFullYear()}`;
}
datasocial();