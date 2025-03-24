
document.addEventListener("DOMContentLoaded", () => {
    // your code here
    //Build a functioning to-do list application
    //Find the nodes by using their ID because it's the most specific method.
const taskForm=document.getElementById("create-task-form");
  
  console.log(taskForm);
  
const taskList=document.getElementById("tasks");
  
  console.log(taskList);
  
const priority = document.getElementById("priority");
  
  console.log(priority);
  
  
//form for the "submit" event
 taskForm.addEventListener("submit", (event) => {
  
// Prevent the default form submission behavior
event.preventDefault();
  
  
//Steps to Add a Task Description to the List
// Get the Task Description from the Input Field:
//1.Use document.getElementById() to access the input field and retrieve its value.
     
const taskDescription = document.getElementById("new-task-description").value;
  
//2.Create a New List Item (<li>)://.Use document.createElement() to create a new <li> element.
  
const listItem = document.createElement("li");
     
//3.Use the .textContent property to set the task description as the text of the <li>
  
listItem.textContent = taskDescription;
  
  
      //ADDING PRIORITY VALUE
//to determine the color of the text in the list (e.g. red for high priority, yellow for medium,
// green for low)
  function priorityColor() {
   
      if (priority.value === "high") {
        return listItem.style.color = "red";
      } else if (priority.value === "medium") {
        return listItem.style.color = "yellow";
      } else {
        return listItem.style.color = "green";
      }
    }
    priorityColor();
  
  
 //4.Use appendChild() to add the new <li> to the <ul>.
  
 taskList.appendChild(listItem);
  
// Inside the form's submit event listener
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", () => {
     // Remove the task when the delete button is clicked
     listItem.remove();
  })

// Add styles using the style property

deleteButton.style.marginLeft = "15px";
deleteButton.style.color = "red"; 


// Add an edit button
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.addEventListener("click", () => {
     const newDescription = prompt("Edit your task:", listItem.textContent);
     if (newDescription !== null) {
       listItem.textContent = newDescription;
     }
   });
 editButton.style.marginLeft = "15px"; 
 editButton.style.color= "black"; 
// Append edit button
  
listItem.appendChild(editButton);
  
  
//add a delete button

listItem.appendChild(deleteButton);
  
  
//  Clear the input field after adding the task

taskForm.reset();
  
  
    });
  

  });
  
  
  
  