/*
Treehouse Techdegree: SAMIR SALEM
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page){
   
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = " ";
   
   for(let i = 0; i < list.length; i++)
   {
     if(i >= startIndex && i < endIndex)
      {
         //Created each element
         let li = document.createElement("li");
         let div = document.createElement("div");
         let img = document.createElement("img");
         let h3 = document.createElement("h3");
         let span = document.createElement("span");
         let div2 = document.createElement("div");
         let span2 = document.createElement("span");

         //Set attributes 
         li.setAttribute("class", "student-item cf ");
         div.setAttribute("class", "student-details");
         img.setAttribute("class", "avatar");
         img.setAttribute("src", list[i].picture.thumbnail);
         img.setAttribute("alt", "Profile Picture");
         span.setAttribute("email", list[i].email);
         div2.setAttribute("class", "joined-details");
         span2.setAttribute("date", list[i].registered.date);

         //Display info/css styling
         h3.innerHTML = list[i].name.first + ' '+ list[i].name.last;
         span.innerHTML = list[i].email;
         span.style.fontSize = "small";
         div2.style.color = "#A9A9A9";
         div2.innerHTML = "___________________________<br/><br/> Joined " + 
         list[i].registered.date;

         //Appending each tag
         studentList.insertAdjacentElement('beforeend', li);
         li.insertAdjacentElement('beforeend', div);
         div.insertAdjacentElement('beforeend', img);
         div.insertAdjacentElement('beforeend', h3);
         div.insertAdjacentElement('beforeend', span);
         li.insertAdjacentElement('beforeend', div2);
         li.insertAdjacentElement('beforeend', span2); 
      } 
   }
}

   /*
   Create the `addPagination` function
   This function will create and insert/append the elements needed for the pagination buttons
   */
   function addPagination(list){

      let numOfPages = Math.ceil(list.length) / 9;

      const linkList = document.querySelector('.link-list');
      linkList.innerHTML = ' ';

      for(let i = 1; i <= numOfPages +1; i++){

         //Created li and button tags
         let li = document.createElement("li");
         let button = document.createElement('button');
         
         button.setAttribute = "button";
         button.innerHTML = i;

         //Appended the tags to the linkList tag
         linkList.insertAdjacentElement('beforeend', li);
         li.insertAdjacentElement('beforeend', button);
      }

      //Selected first button and set class name
      const firstButton = document.querySelector('button'); 
      firstButton.className = "active";

      //Click event listener
      linkList.addEventListener('click', (e) => {

         if(e.target.tagName == "BUTTON" )
         {
            //Clears previous button
            let button = document.querySelector('.active');
            button.className = ' ';

            //Sets clicked button to active
            e.target.className = 'active';
            showPage(list, e.target.textContent); 
         }
       })
      }

   // Call functions

showPage(data, 1);
addPagination(data);