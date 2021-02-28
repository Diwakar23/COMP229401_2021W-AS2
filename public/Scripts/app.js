//Created by Diwakar Singh
//Section: 401
//Roll No: 301185459
//Assignment: 01
//IIFE - Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
  
           
})();




(function submitForm(that){
    confirm("Thank you " + that.fname.value + "\n" + that.lname.value + "  for contacting us." + that.cNumber.value + "\n"+ that.email.value + "\n"+ that.message.value);
    return false ; 
})();