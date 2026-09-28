let menu = document.getElementById("menu");

fetch("menu.json")
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            menu.innerHTML += `
                <div class="meal">
                    <h2>${data[i].name}</h2>
                    <p>Price: ${data[i].price} JD</p>
                    <p>Available: ${data[i].available}</p>
                </div>
            `;

        }

       localStorage.setItem("menu", JSON.stringify(data));

    });