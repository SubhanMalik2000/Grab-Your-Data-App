
// api integration //

// api url
let url = "https://jsonplaceholder.typicode.com/todos";

// table body
let tbody = document.querySelector('#tbody')

// btn
let btn = document.querySelector('#store');

// table
let thanks = document.querySelector('#table');

// gif
let gif = document.querySelector('#gif');

// btn click event
btn.addEventListener('click', () =>{
    
    // some display styling
    store.style.display = "none";
    gif.style.display = "none";
    thanks.style.visibility = "visible";
    
    // getting API data
    function getData(){
        fetch(url).then((response) =>{
            return response.json();
        }).then((data) => {
            //  console.log(data);     
            //  looping over data
            //  storing data in row //
             data.forEach(element => { tbody.innerHTML +=  `
            
                        <tr>
                         <td>${element.id}</td>
                         <td>${element.title}</td>
                         <td>${element.completed}</td>
                       </tr>
              `
            });
        })
    
    
    }
    getData()
})
