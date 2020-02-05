document.addEventListener("DOMContentLoaded", function() {
    let taskList = document.getElementById("taskList");
    let taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");

    let counter = 0;
    let taskSorted = [[]];

    let span = document.createElement("span");
    span.textContent = "0";
    document.querySelector("body").insertBefore(span, taskList);

    let priority = document.createElement("input");
    priority.placeholder = 1;
    priority.type = "number";
    priority.min = 1;
    priority.max = 10;
    document.querySelector("body").insertBefore(priority, taskList);

    addTaskButton.addEventListener("click", function() {
        let li = document.createElement("li");
        let h1 = document.createElement("h1");
        let delButton = document.createElement("button");
        let completeButton = document.createElement("button");

        console.log(taskInput.value);
        h1.append(taskInput.value);
        delButton.textContent = "Delete";
        completeButton.textContent = "Complete";

        li.appendChild(h1);
        li.appendChild(delButton);
        li.appendChild(completeButton);

        completeButton.addEventListener("click", function() {
            let parent = this.parentElement;
            
            if(parent.className === "done") {
                parent.className = "";
                counter++;
                span.textContent = counter;

            }
            else {
                parent.className = "done";
                counter--;
                span.textContent = counter;
            }
        })
        delButton.addEventListener("click", function() {
            let parent = this.parentElement;
            taskList.removeChild(parent);
        })

        if(taskInput.value.length > 5 && taskInput.value.length < 100) {
            //array with pairs object priority
            //for to check if priority is equal to current or bigger
            /*
            if(priority.value !== null) {
                for(let j=taskSorted.length; j<0; j--) {
                    if(priority.value>taskSorted[j][1]) {
                        taskList.insertBefore(li, taskList[j]);
                        taskInput.value = "";
                        let taskArr = [li, priority.value];
                        taskSorted.splice(j-1, j+1, taskArr);
                        counter++;
                        span.textContent = counter;   
                    }
                }
            } else {
                taskList.appendChild(li);
                taskInput.value = "";
                let taskArr = [li, priority.value];
                taskSorted.push(taskArr);
                console.log(taskSorted[0]);
                counter++;
                span.textContent = counter;
                }
                */
                taskList.appendChild(li);
                taskInput.value = "";
                let taskArr = [li, priority.value];
                taskSorted.push(taskArr);
                console.log(taskSorted[0]);
                counter++;
                span.textContent = counter;
            
            }
            
        })
    
        removeFinishedTasksButton.addEventListener("click", function() {
            let elements = taskList.children;
            for(let i=0; i<elements.length; i++) {
                if(elements[i].className === "done")
                    taskList.removeChild(elements[i]);
            }
        })
})
