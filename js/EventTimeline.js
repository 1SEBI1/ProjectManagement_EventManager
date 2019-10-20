var events;

//Init
init();

//Button Functions------------------------------------------
function init() {
  //var events = [{"EventName":"Event 1","Tasks":[{"TaskName":"Task 1.1","TaskWorkers":["Worker 1","Worker 2","Worker 3"],"TaskStatus":"In Progress"},{"TaskName":"Task 1.2","TaskWorkers":["Worker 1","Worker 2"],"TaskStatus":"Done"}]},{"EventName":"Event 2","Tasks":[{"TaskName":"Task 2.1","TaskWorkers":["Worker 21","Worker 22","Worker 23"],"TaskStatus":"To Do"},{"TaskName":"Task 2.2","TaskWorkers":["Worker 31","Worker 32"],"TaskStatus":"In Progress"},{"TaskName":"Task 2.3","TaskWorkers":["Worker 31","Worker 32"],"TaskStatus":"Done"}]},{"EventName":"Event 3","Tasks":[{"TaskName":"Task 3.1","TaskWorkers":["Worker 1","Worker 2","Worker 3"],"TaskStatus":"Done"},{"TaskName":"Task 3.2","TaskWorkers":["Worker 1","Worker 2"],"TaskStatus":"Done"},{"TaskName":"Task 3.3","TaskWorkers":["Worker 1"],"TaskStatus":"Done"}]},{"EventName":"Event 4","Tasks":[{"TaskName":"Task 4.1","TaskWorkers":["Worker 1"],"TaskStatus":"To Do"},{"TaskName":"Task 4.2","TaskWorkers":["Worker 1","Worker 2"],"TaskStatus":"To Do"},{"TaskName":"Task 4.3","TaskWorkers":["Worker 1","Worker 2","Worker 3"],"TaskStatus":"In Progress"},{"TaskName":"Task 4.4","TaskWorkers":["Worker 1","Worker 2","Worker 3","Worker 4"],"TaskStatus":"Done"}]}]
  //localStorage.setItem("events", JSON.stringify(events))
  events = JSON.parse(localStorage.getItem("events"));

  if (document.getElementById('event').length == 1) {
    events.forEach(function(event) {
      $('#event').append(`<option value="${event.EventName}">${event.EventName}</option>`);
    });
  }

  var taskName;

  $(".button-backlog").on("click", function() {
    if (!($(this).closest(".backlog").length > 0)) {
      taskName = $(this).parent().parent()[0].children[0].textContent;
      editTaskStatus(taskName, "To Do");
      $(this).parents(".input-group").appendTo(".backlog").css({
        "background-color": ""
      });
    }
  });
  $(".button-progress").on("click", function() {
    if (!($(this).closest(".in-progress").length > 0)) {
      taskName = $(this).parent().parent()[0].children[0].textContent;
      editTaskStatus(taskName, "In Progress");
      $(this).parents(".input-group").appendTo(".in-progress").css({
        "background-color": "#ffdfbc"
      });
    }
  });
  $(".button-done").on("click", function() {
    if (!($(this).closest(".done").length > 0)) {
      taskName = $(this).parent().parent()[0].children[0].textContent;
      editTaskStatus(taskName, "Done");
      $(this).parents(".input-group").appendTo(".done").css({
        "background-color": "#cfffd0"
      });
    }
  });

  var placeholderDiv = document.createElement("div");
  var placeholderAtt = document.createAttribute("class");
  var taskDivAttVal = placeholderAtt.value = "placeholder";
  placeholderDiv.setAttributeNode(placeholderAtt);
}

function editTaskStatus(taskName, newStatus) {
  events.forEach(function(event) {
    if (event.EventName == document.getElementById('event').value) {
      event.Tasks.forEach(function(task) {
        if (task.TaskName == taskName) {
          task.TaskStatus = newStatus;
        }
      });
    }
  });
  localStorage.setItem("events", JSON.stringify(events));
}

//Create Task------------------------------------------
$("#add-button").on("click", function() {
  if (document.getElementById('event').value != "") {
    $( ".backlog" ).empty();
    $( ".in-progress" ).empty();
    $( ".done" ).empty();
    events.forEach(function(event) {
      if (event.EventName == document.getElementById('event').value) {
        event.Tasks.forEach(function(task) {
          addTask(task);
        });
      }
    });
  }
});

function addTask(task) {

  var taskDiv = document.createElement("div");
  var taskSpan = document.createElement("span");
  var buttonsDiv = document.createElement("div");
  var buttonBacklog = document.createElement("button");
  var buttonProgress = document.createElement("button");
  var buttonDone = document.createElement("button");

  var taskDivAtt = document.createAttribute("class");
  var buttonsDivAtt = document.createAttribute("class");
  var buttonBacklogAtt = document.createAttribute("class");
  var buttonProgressAtt = document.createAttribute("class");
  var buttonDoneAtt = document.createAttribute("class");

  var taskDivAttVal = taskDivAtt.value = "input-group overflow";
  var buttonsDivAttVal = buttonsDivAtt.value = "margin-top-10";
  var buttonBacklogAttVal = buttonBacklogAtt.value = "button button-backlog";
  var buttonProgressAttVal = buttonProgressAtt.value = "button button-progress";
  var buttonDoneAttVal = buttonDoneAtt.value = "button button-done";

  taskDiv.setAttributeNode(taskDivAtt);
  buttonsDiv.setAttributeNode(buttonsDivAtt);
  buttonBacklog.setAttributeNode(buttonBacklogAtt);
  buttonProgress.setAttributeNode(buttonProgressAtt);
  buttonDone.setAttributeNode(buttonDoneAtt);

  var taskText = document.createTextNode(task.TaskName);
  var buttonBacklogText = document.createTextNode("To Do");
  var buttonProgressText = document.createTextNode("In Progress");
  var buttonDoneText = document.createTextNode("Done");

  taskSpan.appendChild(taskText);
  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(buttonsDiv);
  buttonBacklog.appendChild(buttonBacklogText);
  buttonProgress.appendChild(buttonProgressText);
  buttonDone.appendChild(buttonDoneText);
  buttonsDiv.appendChild(buttonBacklog);
  buttonsDiv.appendChild(buttonProgress);
  buttonsDiv.appendChild(buttonDone);

  if (task.TaskStatus == "To Do") {
    $('.backlog').append(taskDiv);
  }
  else if (task.TaskStatus == "In Progress") {
    $('.in-progress').append(taskDiv);
    $(taskDiv).appendTo(".in-progress").css({
      "background-color": "#ffdfbc",
    });
  }
  else if (task.TaskStatus == "Done") {
    $('.done').append(taskDiv);
    $(taskDiv).appendTo(".done").css({
      "background-color": "#cfffd0",
    });
  }

init();
}
