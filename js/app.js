let indentity = document.querySelector(`#section_main`);

indentity.insertAdjacentHTML(`beforeend`,`
<article>
<span>
<input id="email_input" type="value">
<input id="pass_input" type="value"> 

<button id="login">Login</button
</span>
</article>
` );




function PW_POST_FAILURE(){
    let output = document.querySelector(`#section_main`);

    output.insertAdjacentHTML(`beforeend`, `<h3>Invalid login</h3>`);


}

function PW_POST_SUCCESS(response){

    Cookies.set(`token`, `${response[`data`][`token`]}`);
    window[`location`] = `/pages/home.html`;


}




function User_Login(){

    let pw_input = document.querySelector(`#pass_input`);

    let pw_input_value = pw_input[`value`];

    let em_input = document.querySelector(`#email_input`);

    let em_input_value = em_input[`value`];

    axios({

        url:`https://reqres.in/api/login`,

        method: `POST`,

        data:{


            email: em_input_value,
            password: pw_input_value


        }


    }).then(PW_POST_SUCCESS).catch(PW_POST_FAILURE);


}

let pw_button = document.querySelector(`#login`);

pw_button.addEventListener(`click`, User_Login);


let Login_cookie = Cookies.get(`token`);


if(Login_cookie !== undefined){


indentity.insertAdjacentHTML(`beforeend`, `<button id="logout_button">logout</button>`);
    
}





function remove_cookie(){

    Cookies.remove(`token`);
    
    
    }
    
    let logout_index = document.querySelector(`#logout_button`);
    
    logout_index.addEventListener(`click`, remove_cookie);
    