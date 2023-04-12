
let welcome = document.querySelector(`#welcome`);

let Get_Cookie = Cookies.get(`token`);

function GETsuccess(response){

    let axiosgetpage = document.querySelector(`#colors`)

    for(let counter = 0; counter < response[`data`][`data`].length; counter = counter +1){



        axiosgetpage.insertAdjacentHTML(`beforeend`,
        
        `
        <span id="color_span">


        <div style="width: 200px; height:200px;background-color:${response[`data`][`data`][counter][`color`]};">
        <h2>${response[`data`][`data`][counter][`id`]}</h2>


        <h2>${response[`data`][`data`][counter][`name`]}</h2>


        <h2>${response[`data`][`data`][counter][`year`]}</h2>

        </div>

        </span>
        
        
        `);


    }

}


function GETfailure(){

    let axiosgetpage = document.querySelector(`#welcome`);
    axiosgetpage.insertAdjacentHTML(`beforeend`, `<h3>Fatal request 400</h3>`);

}





if(Get_Cookie === undefined){


    let axiosgetpage = document.querySelector(`#welcome`);
    axiosgetpage.insertAdjacentHTML(`beforeend`, `<h3>Request Failed <a href="/index.html">Please log in</a></h3>`);
    
}else{


    welcome.insertAdjacentHTML(`beforeend`, `<span>


    <h1>Welcome, USER</h1>
    <button id="logout_button">Logout</button>
    </span>
    
    
    `);

    
    axios({


        url:` https://reqres.in/api/unknown`,
    
        method: `GET`
    
    
    }).then(GETsuccess).catch(GETfailure);
    
    
    
}


function remove_cookie(){

Cookies.remove(`token`);


}

let logout_home = document.querySelector(`#logout_button`);

logout_home.addEventListener(`click`, remove_cookie)