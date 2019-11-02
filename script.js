var ul = document.querySelector('ul');
//*************ADD ITEM *****************/
document.getElementById('add-btn').addEventListener('click',
function(e)
{
    e.preventDefault();
    var addInput = document.getElementById('add-input');      
    var error = document.querySelector('.error');
    /********************* Input Validation ************/
    addInput.addEventListener("input", function (event) {        
        if (addInput.validity.valid) {          
          error.innerHTML = ""; 
          error.className = "error"; 
        }
      });

      if (!addInput.validity.valid) {    
        // If the field is not valid, we display a custom
        // error message.
        error.innerHTML = "I expect an e-mail!";
        error.className = "error active";
       
      }

    /*************Checking for unique value to add in Email List *******/
    
    var list = Array.from(document.querySelectorAll('li'));
    var store;
    for(i=0; i < list.length; i++){
      
        if(list[i].firstElementChild.textContent === addInput.value){
            alert('already exist, cannot insert')
            store = list[i].firstElementChild.textContent;        
            
        }
    }
    
    /*********************Storing Added Email List***********/

    if(addInput.value !== store && addInput.validity.valid && addInput.value !== ''){
    var li = document.createElement('li'),        
        firstPar = document.createElement('p'),
        secondPar = document.createElement('p'),
        firstIcon = document.createElement('i'),
        SecondIcon = document.createElement('i')
        

    firstIcon.className = "fa fa-square-o";
    SecondIcon.className = "fa fa-trash";
  

    firstPar.textContent = addInput.value;
    secondPar.appendChild(firstIcon);
    secondPar.appendChild(SecondIcon);
    li.appendChild(firstPar);
    li.appendChild(secondPar);
    
    
    ul.appendChild(li);
    addInput.value = '';
    } 
        
});


//**************check and uncheck *****************************************/

ul.addEventListener('click', function(e)
{
   
    if(e.target.classList[1] === "fa-square-o"){        
        e.target.classList = "fa fa-check-square-o";
              
    }else if(e.target.classList[1] === "fa-check-square-o"){
        e.target.classList = "fa fa-square-o";
    }
     else if(e.target.classList[1] === "fa-trash")
    {
        var list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
    
});


//***********************Hide/Unhide Unchecked/Disable Email List *******************************/

var hideItems = document.getElementById('hide');
hideItems.addEventListener('click', function()
{

    var label = document.querySelector('label');

    if(hideItems.checked)
    {   
        var notes = ul.getElementsByTagName('li');
        console.log(notes)
        Array.from(notes).forEach(function(note){
             var parText = note.children[1].childNodes[0];     
                    
            if(parText.classList[1] === "fa-check-square-o"){
                note.style.display = 'block';
            }
            else{
                note.style.display = 'none';
            }
        });
        label.textContent = 'Show all email';
       
    }
    else
    {
        var notes = ul.getElementsByTagName('li');

        Array.from(notes).forEach(function(note){
            note.style.display = 'block';           
        });
        
        label.textContent = 'Show only Enables';
        
    }

  

});


/********Search Filter **********************************/

var searchInput = document.querySelector('#search-note input');

searchInput.addEventListener('keyup', function(e)
{

     var searchChar = e.target.value.toUpperCase();    
     var notes = ul.getElementsByTagName('li');
     Array.from(notes).forEach(function(note){
         var parText = note.firstElementChild.textContent;
         if(parText.toUpperCase().indexOf(searchChar) !== -1)
         {
              note.style.display = 'block';
         }
         else
         {
             note.style.display = 'none';
         }
     });
});