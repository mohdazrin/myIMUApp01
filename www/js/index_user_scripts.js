/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #op-staffBack */
    $(document).on("click", "#op-staffBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* graphic button  #op-staff-01 */
    $(document).on("click", "#op-staff-01", function(evt)
    {
         /*global activate_page */
         activate_page("#staffMenu"); 
         return false;
    });
    
        /* button  #op-studentBack */
    $(document).on("click", "#op-studentBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* graphic button  #op-student-01 */
    $(document).on("click", "#op-student-01", function(evt)
    {
         /*global activate_page */
         activate_page("#studentMenu"); 
         return false;
    });
    
        /* button  #op-staffOSidebar */
    $(document).on("click", "#op-staffOSidebar", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#op-sidebarStaff"));  
         return false;
    });
    
        /* button  #op-sideMenuHomeStaff */
    $(document).on("click", "#op-sideMenuHomeStaff", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Student */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         /*global activate_page */
         activate_page("#studentMenu"); 
         return false;
    });
    
        /* button  .uib_w_22 */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_43"));  
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_44", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Staff */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         /*global activate_page */
         activate_page("#staffMenu"); 
         return false;
    });
    
        /* button  .uib_w_48 */
    $(document).on("click", ".uib_w_48", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_49"));  
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_50", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_52", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Staff */
    $(document).on("click", ".uib_w_53", function(evt)
    {
         /*global activate_page */
         activate_page("#staffMenu"); 
         return false;
    });
    
        /* button  Student */
    $(document).on("click", ".uib_w_54", function(evt)
    {
         /*global activate_page */
         activate_page("#studentMenu"); 
         return false;
    });
    
        /* graphic button  #fbck-btn */
    $(document).on("click", "#fbck-btn", function(evt)
    {
         /*global activate_page */
         activate_page("#feedback"); 
         return false;
    });
    
        /* button  #rcpSubmit */
    
    
    /* button  #rcpSubmit */
    /* Azrin 061017 Proses untuk form feedback */
    $(document).on("click", "#rcpSubmit", function(evt)
    {
        
        /*****************************************************************/
        event.preventDefault();
    
        var $form = $( this ),
        //url = "http://user.mydroid.io/sams/formpost.php";
        //url = "http://128.199.110.121/training/formpost2.php";
        url = "http://localhost/training/feedback.php";
        var posting = $.post( url, { fullname: $('#rcpFullname').val(), email: $('#rcpEmail').val(), feedback: $('#rcpFeedback').val() } );
            posting.done(function( data ) {
            alert('success');
        });

        activate_page("#mainpage");
        /*****************************************************************/
        
        
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
