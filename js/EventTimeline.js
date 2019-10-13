//Init
init();

//Button Functions------------------------------------------
function init() {
  //localStorage.setItem("items", JSON.stringify(["A", "B", "C"]))
  var items = JSON.parse(localStorage.getItem('items'));

  var container = $("#containing_div");
  items.forEach(function(item) {
    var box = document.createElement('div');
    box.classList.add("input-group");
    box.classList.add("overflow");

    var text = document.createElement('span');
    text.innerHTML = item;

    box.appendChild(text);

    var buttons = document.createElement('div');
    buttons.classList.add('margin-top-10');
    buttons.innerHTML = '<button class="button button-backlog">To Do</button><button class="button button-progress">In Progress</button><button class="button button-done">Done</button><button class="button button-delete">Delete</button>';

    box.appendChild(buttons);

    container.append(box);
  });


  $(".button-backlog").on("click", function() {
    if (!($(this).closest(".backlog").length > 0)) {
      $(this).parents(".input-group").appendTo(".backlog").css({
        "background-color": "",
        "border": ""
      });
    }
  });
  $(".button-progress").on("click", function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (!($(this).closest(".in-progress").length > 0)) {
      $(this).parents(".input-group").appendTo(".in-progress").css({
        "background-color": "#ffdfbc",
        "border": "none"
      });
    }
  });
  $(".button-done").on("click", function() {
    if (!($(this).closest(".done").length > 0)) {
      $(this).parents(".input-group").appendTo(".done").css({
        "background-color": "#cfffd0",
        "border": "none"
      });

    }
  });
  $(".button-delete").on("click", function() {
    $(this).parents(".input-group").remove();
  });

  var placeholderDiv = document.createElement("div");
  var placeholderAtt = document.createAttribute("class");
  var taskDivAttVal = placeholderAtt.value = "placeholder";
  placeholderDiv.setAttributeNode(placeholderAtt);

  //DRAG Functions------------------------------------------
  //Drag - onmousedown
  $(".drag").on("mousedown", function() {
    var taskWidth = $(this).parents(".input-group").width();
    var taskHeight = $(this).parents(".input-group").height();
    var $this = $(this);
    $(this).parents(".input-group").css({
      "position": "absolute",
      "width": taskWidth
    });

    $(this).parents(".input-group").after(placeholderDiv);
    $(".backlog").css({"background-color" : "#fffce0"});
    $(".in-progress").css({"background-color" : "#fffce0"});
    $(".done").css({"background-color" : "#fffce0"});

    //Drag - onmousemove
    $(document.body).on("mousemove", function(event) {
      $this.parents(".input-group").css({
        "position": "absolute",
        "top": event.pageY - 13,
        "left": event.pageX - taskWidth,
        "width": taskWidth,
        "z-index": "1000"
      });
    });
  });

  //Drag - onmouseup
  $(".drag").on("mouseup", function() {
    $(this).parents(".input-group").after(placeholderDiv);
    placeholderDiv.remove();
    $(this).parents(".input-group").removeAttr("style");
    $(document.body).unbind("mousemove");
    $(".backlog").css({"background-color" : ""});
    $(".in-progress").css({"background-color" : ""});
    $(".done").css({"background-color" : ""});
  });

}

//Create Task------------------------------------------
$("#add-button").on("click", function() {

  var taskDiv = document.createElement("div");
  var taskSpan = document.createElement("span");
  var buttonsDiv = document.createElement("div");
  var buttonBacklog = document.createElement("button");
  var buttonProgress = document.createElement("button");
  var buttonDone = document.createElement("button");
  var buttonDelete = document.createElement("button");

  var taskDivAtt = document.createAttribute("class");
  var buttonsDivAtt = document.createAttribute("class");
  var buttonBacklogAtt = document.createAttribute("class");
  var buttonProgressAtt = document.createAttribute("class");
  var buttonDoneAtt = document.createAttribute("class");
  var buttonDeleteAtt = document.createAttribute("class");

  var taskDivAttVal = taskDivAtt.value = "input-group overflow";
  var buttonsDivAttVal = buttonsDivAtt.value = "margin-top-10";
  var buttonBacklogAttVal = buttonBacklogAtt.value = "button button-backlog";
  var buttonProgressAttVal = buttonProgressAtt.value = "button button-progress";
  var buttonDoneAttVal = buttonDoneAtt.value = "button button-done";
  var buttonDeleteAttVal = buttonDeleteAtt.value = "button button-delete";

  taskDiv.setAttributeNode(taskDivAtt);
  buttonsDiv.setAttributeNode(buttonsDivAtt);
  buttonBacklog.setAttributeNode(buttonBacklogAtt);
  buttonProgress.setAttributeNode(buttonProgressAtt);
  buttonDone.setAttributeNode(buttonDoneAtt);
  buttonDelete.setAttributeNode(buttonDeleteAtt);

  var taskText = document.createTextNode($("#task").val());
  var buttonBacklogText = document.createTextNode("Backlog");
  var buttonProgressText = document.createTextNode("In Progress");
  var buttonDoneText = document.createTextNode("Done");
  var buttonDeleteText = document.createTextNode("Delete");

  taskSpan.appendChild(taskText);
  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(buttonsDiv);
  buttonBacklog.appendChild(buttonBacklogText);
  buttonProgress.appendChild(buttonProgressText);
  buttonDone.appendChild(buttonDoneText);
  buttonDelete.appendChild(buttonDeleteText);
  buttonsDiv.appendChild(buttonBacklog);
  buttonsDiv.appendChild(buttonProgress);
  buttonsDiv.appendChild(buttonDone);
  buttonsDiv.appendChild(buttonDelete);

  $('.backlog').append(taskDiv);

  init();

});
