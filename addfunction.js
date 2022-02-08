   function add() {
      var f = parseInt(document.getElementsByName("input1")[0].value);
      var s =parseInt(document.getElementsByName("input2")[0].value);
      var result = f+s;
      document.getElementsByName("display")[0].value= result;
   }
