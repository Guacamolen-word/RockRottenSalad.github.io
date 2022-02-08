   function add() {
      var f = parseString(document.getElementsByName("input1")[0].value);
      var s =parseString(document.getElementsByName("input2")[0].value);
      var result = f+s;
      document.getElementsByName("display")[0].value= result;
   }
