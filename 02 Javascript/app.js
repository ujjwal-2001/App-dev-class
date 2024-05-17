const api_url = "https://jsonplaceholder.typicode.com/todos";
const table_body = document.getElementById("try");

fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${element.userId}</td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.completed}</td>
            `;
            table_body.appendChild(tr);
        });
    })
    .catch((error) => console.log(error));

