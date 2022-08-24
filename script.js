let handleButton = document.querySelector("#search-gif");
handleButton.addEventListener("click", () => {
    GetApiGipghyRequest()
});

let input = document.querySelector("#input");
input.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        GetApiGipghyRequest();
    }
})



async function GetApiGipghyRequest() {
    let userInput = document.querySelector("#input").value
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=AAE8205Q5SwoHIfGLKYP6qBcJjm43OVH&q=${userInput}&limit=10&offset=10&rating=r&lang=ro`)
    console.log(response);
    let gifs = await response.json()
    console.log(gifs)
    useApiData(gifs)
};

function useApiData(gifs) {

    document.querySelector("#show-gif").innerHTML = `<img src="${gifs.data[0].images.original.url}"></img>` + 
                                                    `<img src="${gifs.data[1].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[2].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[3].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[4].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[5].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[6].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[7].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[8].images.original.url}"></img>` +
                                                    `<img src="${gifs.data[9].images.original.url}"></img>` 
    }



    

