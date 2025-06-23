function updateTheUser() {

    $.ajax({
        url: ajax_params.url,
        method: 'POST',
        data: {
            action: 'update_user',
            security: ajax_params.nonce,
            user_id: ajax_params.user,
            email: $( '#email' ).val(),
            first_name: $( '#firstname' ).val(),
            last_name: $( '#name' ).val(),
            username: $( '#username' ).val(),
            street: $( '#street' ).val(),
            zip: $( '#zip' ).val(),
            location: $( '#location' ).val(),
            phone: $( '#phone' ).val()
        },
        beforeSend: function( xhr ) {
            // Do something before like add loading animation
        },
        success: function( data ) {
            // Do something on success like redirect the user
            console.log('ok');
        }
    })
  }
  
  $( '#update_user' ).on( 'submit', updateTheUser );