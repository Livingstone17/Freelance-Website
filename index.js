

$(document).ready(function(){
    console.log('jquery loaded');
    console.log($('#submitForm'));
    
$('#submitForm').click((e)=> {
    console.log('submit form success')
    e.preventDefault();
    var name = $('#myName').val();
    var mail = $('#myEmail').val();
    var firstname = $('#fName').val();
    var lastname = $('#lName').val();
    var specialty = $('#mySpec').val();
    var phonenumber = $('#pNumber').val();
    var password = $('#password1').val();
    var minimumwage = $('#minimumWage').val();
    var bio = $('#bio').val();
    var address = $('#address').val();
    var rating = $('#rating').val();
    
    $.ajax({
        url: 'http://localhost:3000/Freelancers',
        method: 'post',
        data : {
            name,mail,firstname,lastname,specialty,phonenumber,password,minimumwage,bio,address,rating
        }
    }).done((e)=> {
        alert('done');
        $('#freelancers').append(
            `<h4>
                ${e.name}
             </h4>
             <p>
             ${e.mail}
             </p>
             <p>
             ${e.fName}
             </p>
             <p>
             ${e.lName}
             </p>
             <p>
             ${e.minimumWage}
             </p>
             <p>
             ${e.bio}
            <p>
            ${e.address}
            </p>
            <h4>
              ${e.spec}  
            </h4>
            <h5>
            ${e.rating}
            </h5>`
        );
        $('#myName').val('');
        $('#myEmail').val('');
        $('#myAddress').val('');
        $('#mySpec').val('');
    });

    
    
    
});
    
});

function getAll(){

return $.ajax({
        url: 'http://localhost:3000/Freelancers',
        method: 'get',
    }).done((e)=> {
    //  alert('done');
    let content = '';
     for(var i=0; i< e.length; i++){
//          var container = document.getElementById("container");
//    container.innerHTML += '<div class="box"></div>';
if(i === 0){
    console.log(e[1], 'first');
    
    content +=
    `
        <div class="row">    
        <div class="col-md-4 col-lg-4 col-sm-12" id="">
        <div class="card" >
        <div class="card-img">
            <img src="images/team3.jpg" class="img-fluid">
        </div>
    <div class="card-body">
        <h4 class="card-title">${e[i].name}</h4>
        <p class="card-text">${e[i].specialty}</p>
        <p> ${e[i].email}</p>
        <p>${e[i].firstname}</p>
        <p>${e[i].lastname}</p>
        <p>${e[i].minimumwage}</p>
        <p>${e[i].phonenumber}</p>
        <p>${e[i].bio}</p>
    </div>
    <div class="card-footer">
        <p>${e[i].address}</p>
    </div>
    </div>
</div>`;
}else if((i+1)%3){
                console.log((i+1)%3, 'not by 3');
                
             content +=
                    `
                    <div class="col-md-4 col-lg-4 col-sm-12" id="">
                    <div class="card" >
                    <div class="card-img">
                        <img src="images/team3.jpg" class="img-fluid">
                    </div>
                <div class="card-body">
                    <h4 class="card-title">${e[i].name}</h4>
                    <p class="card-text">${e[i].specialty}</p>
                    <p> ${e[i].mail}</p>
                    <p>${e[i].firstname}</p>
                    <p>${e[i].lastname}</p>
                     <p>${e[i].minimumwage}</p>
                     <p>${e[i].phonenumber}</p>
                      <p>${e[i].bio}</p>
                </div>
                <div class="card-footer">
                    <p>${e[i].address}</p>
                </div>
                </div>
            </div>`;
            } else {

                
           content +=
                        `   
                        <div class="col-md-4 col-lg-4 col-sm-12" id="">
                        <div class="card" >
                        <div class="card-img">
                            <img src="images/team3.jpg" class="img-fluid">
                        </div>
                    <div class="card-body">
                        <h4 class="card-title">${e[i].name}</h4>
                        <p class="card-text">${e[i].specialty}</p>
                        <p> ${e[i].mail}</p>
                        <p>${e[i].firstname}</p>
                        <p>${e[i].lastname}</p>
                        <p>${e[i].minimumwage}</p>
                        <p>${e[i].phonenumber}</p>
                        <p>${e[i].bio}</p>
                    </div>
                    <div class="card-footer">
                        <p>${e[i].address}</p>
                    </div>
                    </div>
                </div>
                </div>
                        <div class="row"> 
                    `;
                    
                }
            
     }

     $('#freelancers').append(content);     
    
    });
}
$('#myBtn').click((e)=> {
    console.log('submit form success')
    e.preventDefault();
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    
    
    $.ajax({
        url: 'http://localhost:3000/users',
        method: 'post',
        data : {
            username,email,password,
        }
    }).done((e)=> {
        alert('done');
        $('#users').append(
            `<h4>
                ${e.username}
             </h4>
             <p>
             ${e.email}
             </p>`
        );
        $('#username').val('');
        $('#email').val('');
        $('#password').val('');
    });
});
