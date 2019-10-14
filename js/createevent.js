
<script type = "text/javascript">

$("#addStaff").on("click", function() {

  var select = document.getElementById("currentStaff"),
  txtVal2 = document.getElementById("addStaff").value,
  newVal2 = document.createTextNode(txtVal2);
  txtVal.appendChild(newVal2);

  $('#currentStaff').append(new Option(optionText, optionValue));

});

</script>

<script type = "text/javascript">
function addStaff() {
   var select = document.getElementById("currentStaff"),
   txtVal = document.getElementById("addStaff").value,
   newVal = document.createTextNode(txtVal);

   txtval.appendChild(newVal);
   select.insertBefore(newOption, select.lastChild);
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
<script type = "text/javascript">

  $(document).ready(function() {
    $("#removeTask").on("click", function() {
      $("#currentTask option:selected").remove();
    });
  });


</script>
