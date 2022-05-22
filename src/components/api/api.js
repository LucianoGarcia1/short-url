function LinkCurto(){
    const input = document.querySelector(".link");
    const nameUrl = document.querySelector(".alias");

    const a = document.querySelector(".shortLink");
    const divLink = document.querySelector(".link-encurtado");
    const divContent = document.querySelector(".content");

    if(input.value === "" || nameUrl.value === ""){
        alert("Error preencha tudo")

    }else{
        async function gerarLink(input, name){
            let url = `https://encurtaon.com/api?api=7692118a9ff93a6c5e8f43e5443adaad569ca4c6&url=${input}&alias=${name}`;
    
            const required = await fetch(url, {})
            .then(response => response.json())
            .then((data) =>{
                if(data.status === "error"){
                    alert(data.message[0])

                }else{
                    divLink.classList.add("active");
                    divContent.classList.add("desactive");

                    a.setAttribute("href", data.shortenedUrl);
                    a.innerText = data.shortenedUrl;
                }
            })
            .catch((erro)=>{
                console.log(erro);
            })
        }
        gerarLink(input.value, nameUrl.value);
    }

}
export default LinkCurto;