jQuery(document).ready(function($) {
    $('.bookmark-button').on('click', function(e) {
        e.preventDefault(); 

        var button = $(this);
        var post_id = button.data('post-id');
        
     	 //  2024-11-28
        // let str = button.text();
        // let clearText = str.trim();
        // let action = '';
        // //const action = str === 'Add Bookmark' ? 'add_bookmark' : ' remove_bookmark';
        // var stg = '☆';
		
		//use Font Awesome
        let str = button.attr('data-fav-status');
        let clearText = str.trim();
        let action = '';
        var stg = 'notFav';
		
		//test
        console.log(str, stg);
        console.log(clearText, action);

        if (clearText == stg) {
            action = 'add_bookmark';
          //  console.log(action);
        } else {
            action = 'remove_bookmark';
           // console.log(action);
        }    


        $.ajax({
            type: 'POST',
            url: bookmark_ajax_object.ajax_url,
            data: {
                action: action,
                post_id: post_id,
                nonce: bookmark_ajax_object.nonce
            },
            success: function(response) {
                if (response.success) {
                    if (action === 'add_bookmark') {
                        button.toggleClass('bookmarked');
                        button.attr('data-fav-status', 'isFav');
                        button.html($('<i/>',{class:'fa-solid fa-bookmark'}));
                    } else {
                       button.toggleClass('bookmarked');
                       button.attr('data-fav-status', 'notFav');
                       button.html($('<i/>',{class:'fa-regular fa-bookmark'}));
                        
                    }
                } else {
                    console.log(response.data); // Log error message for debugging
                    alert(response.data);
                }
            }
        });
    });
});
