// function to fetch data using Promise
function fetchData(url) {

  return new Promise(function (resolve, reject) {

    fetch(url)
      .then(function (response) {

        if (response.ok) {
          return response.json();
        } else {
          reject("Error while fetching data");
        }

      })
      .then(function (data) {
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });

  });
}


// using the promise
function loadData() {

  fetchData("https://jsonplaceholder.typicode.com/users")
    .then(function (data) {

      let list = document.getElementById("result");

      data.forEach(function (user) {
        let li = document.createElement("li");
        li.innerText = user.name;
        list.appendChild(li);
      });

    })
    .catch(function (error) {
      console.log(error);
    });

}
