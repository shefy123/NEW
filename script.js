// Write all your Javascript here!
let date = new Date();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function changeLanguages(index) {
    document.querySelector('#image').style = `background-image:url(${index.imageURL})`
    document.querySelector('#title .card-title').innerHTML = index.info.heading
    document.querySelector('#title .card-text').innerHTML = index.info.description
    document.querySelector('#second .card-title').innerHTML = index.sale.heading
    document.querySelector('#second .card-text').innerHTML = index.sale.description
    document.querySelector('#option1').innerHTML = index.menuOptions[0].toUpperCase();
    document.querySelector('#option2').innerHTML = index.menuOptions[1].toUpperCase();
    document.querySelector('#option3').innerHTML = index.menuOptions[2].toUpperCase();
    document.querySelector('#option4').innerHTML = index.menuOptions[3].toUpperCase();
    document.querySelector(".card-body #date").innerHTML =`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}h ${date.getMinutes()}m`
}

// FOR ENGLISH LANGUAGE

function forEng() {

    $.ajax({

        url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
        success: function (data) {
            console.log(data);

            changeLanguages(data);
        },
        error: function (err) {
            console.log('if error is occur');
        }
    })

}

//  FOR CHINIES LANGUAGE

function forChinies() {
    $.ajax({

        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
        success: function (data) {
         
            changeLanguages(data);

        },
        error: function (err) {
            console.log('if error is occur');
        }
    })

}

// FOR URUD LANGUAGE

function forUrdu() {
    $.ajax({

        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
        success: function (data) {

            changeLanguages(data);

        },
        error: function (err) {
            console.log('if error is occur');
        }

    })

}