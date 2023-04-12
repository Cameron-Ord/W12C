//selecting the element//
let indentity = document.querySelector(`#section_main`);
//injecting the inputs and buttons//
indentity.insertAdjacentHTML(`beforeend`,`
<article>
<span>
<input id="email_input" type="value">
<input id="pass_input" type="value"> 

<button id="login">Login</button
</span>
</article>
` );



//the failure function, provides a message on invalid login//
function PW_POST_FAILURE(){
    let output = document.querySelector(`#section_main`);

    output.insertAdjacentHTML(`beforeend`, `<h3>Invalid login</h3>`);


}
//the success function, sets a cookie to response and takes you to the home page//
function PW_POST_SUCCESS(response){

    Cookies.set(`token`, `${response[`data`][`token`]}`);
    window[`location`] = `/pages/home.html`;


}



//the login function//
function User_Login(){
//selects the pass_input element as pw_input//
    let pw_input = document.querySelector(`#pass_input`);
//sets the pw_input_value to 'value', which is grabbed from what is writen in the input box//
    let pw_input_value = pw_input[`value`];
//the same process from above on a different element//
    let em_input = document.querySelector(`#email_input`);

    let em_input_value = em_input[`value`];

    axios({
//the axios command, using post//
        url:`https://reqres.in/api/login`,

        method: `POST`,

        data:{

//using the variables created before the axios command//
            email: em_input_value,
            password: pw_input_value


        }

//calling the functions based on the data given//
    }).then(PW_POST_SUCCESS).catch(PW_POST_FAILURE);


}

//selecting the login element and giving it a variable//
let pw_button = document.querySelector(`#login`);
//the event listener, calling the function on click//
pw_button.addEventListener(`click`, User_Login);

//getting the cookies and setting it as a variable//
let Login_cookie = Cookies.get(`token`);

//if the cookie is not undefined. provide a logout button//
if(Login_cookie !== undefined){

//injecting the respective html//
indentity.insertAdjacentHTML(`beforeend`, `<button id="logout_button">logout</button>`);
    
}





function remove_cookie(){
//using the cookies remove command to remove the selected cookie//
    Cookies.remove(`token`);
    
    
    }
    
    let logout_index = document.querySelector(`#logout_button`);
    //calling the function with a click//
    logout_index.addEventListener(`click`, remove_cookie);
    