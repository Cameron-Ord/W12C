let indentity = document.querySelector(`#section_main`);

indentity.insertAdjacentHTML(`beforeend`,`
<article>
<span>
<input type="value"> <button id="email_button">Email</button>
<input type="value"> <button id="password_button">Password</button>
</span>
</article>
` );




function PW_POST_FAILURE(){
    let output = document.querySelector(`#section_main`);

    output.insertAdjacentHTML(`beforeend`, `<h3>failure</h3>`);

};

function PW_POST_SUCCESS(response){

    Cookies.set(`token`, response[`data`][`token`]);
    window[`location`] = `/pages/logout.html`;


};




function API_PWEM(){

    let pw_input = document.querySelector(`#password_button`);

    let pw_input_value = pw_input[`value`];

    let em_input = document.querySelector(`#email_button`);

    let em_input_value = em_input[`value`];

    axios({

        url:`https://reqres.in/api/login`,

        method: `POST`,

        data:{


            email: em_input_value,
            password: pw_input_value


        }


    }).then(PW_POST_SUCCESS).catch(PW_POST_FAILURE);


};

let pw_button = document.querySelector(`#password_button`);

pw_button.addEventListener(`click`, API_PWEM)