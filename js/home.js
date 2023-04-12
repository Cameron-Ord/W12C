
let welcome = document.querySelector(`#welcome`);
//selecting the element//
let Get_Cookie = Cookies.get(`token`);
//grabbing the cookies set by app.js//
function GETsuccess(response){

    //selecting the element inside the function//
    let axiosgetpage = document.querySelector(`#colors`)

    //a loop that goes through first the data object, then the data array//
    for(let counter = 0; counter < response[`data`][`data`].length; counter = counter +1){



        //injecting the HTML into #colors, and looping through the array inside the API//
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
//setting the failure function//
    let axiosgetpage = document.querySelector(`#welcome`);
    axiosgetpage.insertAdjacentHTML(`beforeend`, `<h3>Fatal request 400</h3>`);

}





if(Get_Cookie === undefined){


    // if the cookie is not defined, print a failure message and provide a link to the login page//
    let axiosgetpage = document.querySelector(`#welcome`);
    axiosgetpage.insertAdjacentHTML(`beforeend`, `<h3>Request Failed <a href="/index.html">Please log in</a></h3>`);
    
}else{

    //otherwise, print a welcome and run the axios command, providing the data for GETsuccess and GETfailure//


    welcome.insertAdjacentHTML(`beforeend`, `<span>


    <h1>Welcome, USER</h1>
    <button id="logout_button">Logout</button>
    </span>
    
    
    `);

    //a logout button is provided//
    axios({


        url:` https://reqres.in/api/unknown`,
    
        method: `GET`
    
    
    }).then(GETsuccess).catch(GETfailure);
    
    
    
}

//the function that the logout button uses//

function remove_cookie(){
//removes the login token cookie//
Cookies.remove(`token`);


}

//the selector for the button//
let logout_home = document.querySelector(`#logout_button`);
//the event listener for the button, uses the function on click.//
logout_home.addEventListener(`click`, remove_cookie)