const button = document.querySelector("button")
const body = document.querySelector("body")

function buttonClicked() {
    axios.get("https://swapi.dev/api/planets/2/")
        .then((response) => {
            console.log(response)
            console.log(response.data)
            console.log(response.data["residents"])

            for (let i = 0; i < response.data["residents"].length; i++) {
                console.log(i)
                axios.get(response.data["residents"][i])
                    .then((response2) => {
                        let name = document.createElement("h2")
                        name.textContent = response2.data["name"]
                        body.appendChild(name)
                    })
            }
        })
}

button.addEventListener("click", buttonClicked)