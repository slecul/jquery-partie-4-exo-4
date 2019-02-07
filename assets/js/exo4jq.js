$(function(){
  $('#generate').click(function(){
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var birthDate = $('#birthDate').val();
    var birthPlace = $('#birthPlace').val();
    var work = $('#work').val();
    var society = $('#society').val();
    alert(lastName+' '+firstName+', né le '+birthDate+' à '+birthPlace+', actuellement '+work+' chez '+society);

  });
});
