

$(document).ready(function(){
    console.log('jquery loaded');
    console.log($('#submitForm'));
    
    $('#submitForm').click((e)=> {
    console.log('submit form success')
    e.preventDefault();
    var name = $('#myName').val();
    var mail = $('#myEmail').val();
    var address = $('#myAddress').val();
    var spec = $('#mySpec').val();
    
    $.ajax({
        url: 'http://localhost:3000/Freelancers',
        method: 'post',
        data : {
            name,address,spec,mail
        }
    }).done((e)=> {
        $('#freelancers').append(
            `<h4>
                ${e.name}
             </h4>
            <p>
            ${e.address}
            </p>
            <h4>
              ${e.spec}  
            </h4>
            <h5>
            ${e.mail}
            </h5>`
        )
        $('#myName').val('');
        $('#myEmail').val('');
        $('#myAddress').val('');
        $('#mySpec').val('');
    });

    
    
    
});
    
});

 $.ajax({
        url: 'http://localhost:3000/Freelancers',
        method: 'get',
    }).done((e)=> {
     alert('done');
     for(var i=0; i< e.length; i++){
         $('#freelancers').append(
            `
                <h4>
                ${e[i].name}
             </h4>
            <p>
            ${e[i].address}
            </p>
            <h4>
              ${e[i].spec}  
            </h4>
            <h5>
            ${e[i].mail}
            </h5>`
        )
     }
        
     
    });
    
 $('.header').height($(window).height());
 
//<div class="card-body" id="freelancers">
//                        <h4 class="card-title"> </h4>
//                    <p class="card-text"> </p>
//                    <h4 class="card-text"> </h4>
//                    <h5> </h5>
//               </div>
//
