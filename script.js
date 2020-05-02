
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: '{country}'
});