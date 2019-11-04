
<script type= "text/javascript">
$(document).ready(function() {
  $("#removeStaff").on("click", function() {
    $("#currentStaff option:selected").remove();
  });
});

</script>

<script type = "text/javascript">
  $(document).ready(function() {
    $("#removeTask").on("click", function() {
      $("#currentTask option:selected").remove();
    });
  });
</script>

<script type = "text/javascript">
function addStaff() {
   var select = document.getElementById("currentStaff"),
   txtVal = document.getElementById("assignStaff").value,
   newOpt = document.createElement("OPTION"),
   newOptVal = document.createTextNode(txtVal);

   newOpt.appendChild(newOptVal);
   select.insertBefore(newOpt, select.lastChild);
}
</script>

<script type = "text/javascript">
function addTask() {
   var select = document.getElementById("currentTask"),
   txtVal = document.getElementById("addTasks").value,
   newOption = document.createElement("OPTION"),
   newOptionVal = document.createTextNode(txtVal);

   newOption.appendChild(newOptionVal);
   select.insertBefore(newOption, select.lastChild);
}
</script>
