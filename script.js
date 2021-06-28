function toDoList() {
     
     
      let input = document.getElementById('task-input'),
      message = document.querySelector('.to-do-list__message');
      const addButton = document.getElementById('added');

      addButton.addEventListener( 'click', () => {
           
          if( input.value === "" ) {
              message.classList.add('shake');
              setTimeout( () => {
                  message.classList.remove('shake');
              }, 1000 );

              return;
          }

          let li = document.createElement('li'),
              liText = document.createTextNode( input.value ),
              liParent = document.querySelector('.to-do-list__list');


              li.appendChild( liText );

              li.className = 'to-do-list__item';

              liParent.append(li);

              li.addEventListener( 'click', () => {
                   li.style.textDecoration = 'line-through';
              });

              li.addEventListener( 'dblclick', () => {
                 li.style.display = 'none';  
              });

              input.value = "";
      });


}

// retrive the function.
toDoList(); 

const type = () => {

    const header = document.querySelector('.header');

    const headingsChild = header.children;
    
    const headingsArr = Array.from( headingsChild );
    
    
    for( let count = 0 ; count < headingsArr.length; count++ ) {
    
          setTimeout( () => {
              
            headingsArr[count].classList.add('active');
    
          }, 4200 * count );
    
    }

}

// retrive the function on load.
type();

setInterval( type, 12000 );

