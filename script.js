// Write all your Javascript here!

function initialize() {
    $.ajax({

        url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
        success: function (data) {
            console.log(data);
            console.log(data.info.heading);

           // for date

            // let dateTime = data getdate 
            // document.querySelector('#date').innerHTML=date.getDate();

            // image
            document.querySelector('#image').style=`background-image:url(${data.imageURL})`
         

            let cardEL = document.querySelector('#title');
            cardEL.innerHTML = ` <h5 class="card-title">${data.info.heading}</h5>
              <p class="card-text">${data.info.description}</p>
              `
            let cardTitleEL = document.querySelector('#second');
            cardTitleEL.innerHTML = ` <h5 class="card-title">${data.sale.heading}</h5>
              <p class="card-text">${data.sale.description} </p>
              `
            let cardTitleNavEL = document.querySelector('.menu');
            cardTitleNavEL.innerHTML = `<ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#">${data.menuOptions[0]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[1]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[2]}</a>
            </li>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[3]}</a>
            </li>
        </ul>
              `


        },
        error: function (err) {
            console.log('gfgfhfghffhgfhf');
        }
    })
    console.log('dhasdjg');
}

function initializePk() {
    $.ajax({

        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
        success: function (data) {
            console.log(data);
            console.log(data.info.heading);
            let cardEL = document.querySelector('#title');
            cardEL.innerHTML = ` <h5 class="card-title">${data.info.heading}</h5>
              <p class="card-text">${data.info.description}</p>
              `
            let cardTitleEL = document.querySelector('#second');
            cardTitleEL.innerHTML = ` <h5 class="card-title">${data.sale.heading}</h5>
              <p class="card-text">${data.sale.description} </p>
              `
            let cardTitleNavEL = document.querySelector('.menu');
            cardTitleNavEL.innerHTML = `<ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#">${data.menuOptions[0]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[1]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[2]}</a>
            </li>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[3]}</a>
            </li>
        </ul>
              `


        },
        error: function (err) {
            console.log('gfgfhfghffhgfhf');
        }
    })
    console.log('dhasdjg');
}
function initializeUr() {
    $.ajax({

        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
        success: function (data) {
            console.log(data);
            console.log(data.info.heading);
            let cardEL = document.querySelector('#title');
            cardEL.innerHTML = ` <h5 class="card-title">${data.info.heading}</h5>
              <p class="card-text">${data.info.description}</p>
              `
            let cardTitleEL = document.querySelector('#second');
            cardTitleEL.innerHTML = ` <h5 class="card-title">${data.sale.heading}</h5>
              <p class="card-text">${data.sale.description} </p>
              `
            let cardTitleNavEL = document.querySelector('.menu');
            cardTitleNavEL.innerHTML = `<ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#">${data.menuOptions[0]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[1]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[2]}</a>
            </li>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data.menuOptions[3]}</a>
            </li>
        </ul>
              `


        },
        error: function (err) {
            console.log('gfgfhfghffhgfhf');
        }
    })
    console.log('dhasdjg');
}