var taInput, divOutput;
var btnRun;

window.onload = function() {
  console.log("Hooray! Its working");
  taInput = document.getElementById('txtInput');
  divOutput = document.getElementById('divOutput');
  btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
  console.log("Running Warshall")
  divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>";
  FwAlgo();
  //Get Input from 
}//end run

function FwAlgo(){
  alert('Please wait its working');
  var input_array = [];
  var input_val = taInput.value;
  var array_1 = input_val.split('\n');
  var array_100 = [];
  var array_1 = [];
  var array_2 = [];
  var array_3 = [];
  var array_4 = [];
  var array_5 = [];
  var array_6 = [];
  var array_7 = [];
  var array_8 = [];
  var array_9 = [];
  var array_10 = [];
  var array_11 = [];
  var array_12 = [];
  var array_13 = [];
  var array_14 = [];
  var array_15 = [];
  var array_16 = [];
  var array_17 = [];
  var array_18 = [];
  var array_19 = [];
  var array_20 = [];
  var array_21 = [];
  var array_22 = [];
  var array_23 = [];
  var array_24 = [];
  var array_25 = [];
  var array_26 = [];
  var array_27 = [];
  var array_28 = [];
  var array_29 = [];
  var array_30 = [];
  var array_31 = [];
  var array_32 = [];
  var array_33 = [];
  var array_34 = [];
  var array_35 = [];
  var array_36 = [];
  var array_37 = [];
  var array_38 = [];
  var array_39 = [];
  var array_40 = [];


  for (
    var i = 0; 
    i < array_1.length;
     i++
    ) 
  {

    input_array[i] = array_1[i].split(',');

  }

  var box = input_array;

  for(
    var i = 0; 
    i < input_array.length; 
    i++
    )
  {

    for(
      var j=0;
      j<input_array.length;
      j++
      )
    {

      box[i][j] = parseInt(input_array[i][j]);

    }

  }


  

divOutput.innerHTML += "Random Array";
divOutput.innerHTML += "<br />";

for(var i=0; i<100; i++) {
    array_100[i] = [];
    divOutput.innerHTML += "[";
    for(var j=0; j<100; j++) {
      var value_ = '';  
      rand = Math.random();
      if (rand > 0.5) 
        value_ = 1;
      else 
        value_ = 0;
      array_100[i][j] = value_;
      divOutput.innerHTML += array_100[i][j] + ' ';

console.log( Plotly.BUILD );
    }   
    divOutput.innerHTML += "]";
    divOutput.innerHTML += "<br />";
}





divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 1";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_1[i] = [];
    for(var j=0; j<4; j++) {
      var value_ = array_100[i][j];
      array_1[i][j] = value_;
      //divOutput.innerHTML += array_1[i][j] + ' ';
    }  

}

;
var count = array_1.length;
var result = array_1;
for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }



divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 2";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_2[i] = [];
    for(var j=4; j<8; j++) {
      var value_ = array_100[i][j];
      array_2[i][j] = value_;

    }   
}

for(var i=0; i<array_2.length; i++) {
  array_2[i] = array_2[i].filter(function (row) {
    return row != null;
  });
}


;
var count = array_2.length;
var result = array_2;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 3";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_3[i] = [];
    for(var j=8; j<12; j++) {
      var value_ = array_100[i][j];
      array_3[i][j] = value_;

    }   
}

for(var i=0; i<array_3.length; i++) {
  array_3[i] = array_3[i].filter(function (row) {
    return row != null;
  });
}


;
var count = array_3.length;
var result = array_3;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 4";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_4[i] = [];
    for(var j=12; j<16; j++) {
      var value_ = array_100[i][j];
      array_4[i][j] = value_;

    }   
}

for(var i=0; i<array_4.length; i++) {
  array_4[i] = array_4[i].filter(function (row) {
    return row != null;
  });
}


;
var count = array_4.length;
var result = array_4;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 5";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_5[i] = [];
    for(var j=16; j<20; j++) {
      var value_ = array_100[i][j];
      array_5[i][j] = value_;

    }   
}

for(var i=0; i<array_5.length; i++) {
  array_5[i] = array_5[i].filter(function (row) {
    return row != null;
  });
}


;
var count = array_5.length;
var result = array_5;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }


divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 6";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_6[i] = [];
    for(var j=20; j<24; j++) {
      var value_ = array_100[i][j];
      array_6[i][j] = value_;

    }   
}

for(var i=0; i<array_6.length; i++) {
  array_6[i] = array_6[i].filter(function (row) {
    return row != null;
  });
}


;
var count = array_6.length;
var result = array_6;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }


divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 7";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_7[i] = [];
    for(var j=24; j<28; j++) {
      var value_ = array_100[i][j];
      array_7[i][j] = value_;

    }   
}

for(var i=0; i<array_7.length; i++) {
  array_7[i] = array_7[i].filter(function (row) {
    return row != null;
  });
}


;
var count = array_7.length;
var result = array_7;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }



divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 8";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_8[i] = [];
    for(var j=28; j<32; j++) {
      var value_ = array_100[i][j];
      array_8[i][j] = value_;

    }   
}

for(var i=0; i<array_8.length; i++) {
  array_8[i] = array_8[i].filter(function (row) {
    return row != null;
  });
}


;
var count = array_8.length;
var result = array_8;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }


divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 9";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_9[i] = [];
    for(var j=32; j<36; j++) {
      var value_ = array_100[i][j];
      array_9[i][j] = value_;

    }   
}

for(var i=0; i<array_9.length; i++) {
  array_9[i] = array_9[i].filter(function (row) {
    return row != null;
  });
}


console.log(array_9);
var count = array_9.length;
var result = array_9;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }



divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 10";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_10[i] = [];
    for(var j=36; j<40; j++) {
      var value_ = array_100[i][j];
      array_10[i][j] = value_;

    }   
}

for(var i=0; i<array_10.length; i++) {
  array_10[i] = array_10[i].filter(function (row) {
    return row != null;
  });
}

;
var count = array_10.length;
var result = array_10;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }



divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 11";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_11[i] = [];
    for(var j=36; j<40; j++) {
      var value_ = array_100[i][j];
      array_11[i][j] = value_;

    }   
}

for(var i=0; i<array_11.length; i++) {
  array_11[i] = array_11[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_11);
var count = array_11.length;
var result = array_11;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }

divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 12";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_12[i] = [];
    for(var j=0; j<4; j++) {
      var value_ = array_100[i][j];
      array_12[i][j] = value_;

    }   
}

for(var i=0; i<array_12.length; i++) {
  array_12[i] = array_12[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_12);
var count = array_12.length;
var result = array_12;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 13";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_13[i] = [];
    for(var j=4; j<8; j++) {
      var value_ = array_100[i][j];
      array_13[i][j] = value_;

    }   
}

for(var i=0; i<array_13.length; i++) {
  array_13[i] = array_13[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_13);
var count = array_13.length;
var result = array_13;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 14";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_14[i] = [];
    for(var j=8; j<12; j++) {
      var value_ = array_100[i][j];
      array_14[i][j] = value_;

    }   
}

for(var i=0; i<array_14.length; i++) {
  array_14[i] = array_14[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_14);
var count = array_14.length;
var result = array_14;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 15";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_15[i] = [];
    for(var j=12; j<16; j++) {
      var value_ = array_100[i][j];
      array_15[i][j] = value_;

    }   
}

for(var i=0; i<array_15.length; i++) {
  array_15[i] = array_15[i].filter(function (row) {
    return row != null;
  });
}



;
var count = array_15.length;
var result = array_15;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 16";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_16[i] = [];
    for(var j=16; j<20; j++) {
      var value_ = array_100[i][j];
      array_16[i][j] = value_;

    }   
}

for(var i=0; i<array_16.length; i++) {
  array_16[i] = array_16[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_16);
var count = array_16.length;
var result = array_16;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }

  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 17";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_17[i] = [];
    for(var j=20; j<24; j++) {
      var value_ = array_100[i][j];
      array_17[i][j] = value_;

    }   
}

for(var i=0; i<array_17.length; i++) {
  array_17[i] = array_17[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_17);
var count = array_17.length;
var result = array_17;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 18";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_18[i] = [];
    for(var j=24; j<28; j++) {
      var value_ = array_100[i][j];
      array_18[i][j] = value_;

    }   
}

for(var i=0; i<array_18.length; i++) {
  array_18[i] = array_18[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_18);
var count = array_18.length;
var result = array_18;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 19";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_19[i] = [];
    for(var j=28; j<32; j++) {
      var value_ = array_100[i][j];
      array_19[i][j] = value_;

    }   
}

for(var i=0; i<array_19.length; i++) {
  array_19[i] = array_19[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_19);
var count = array_19.length;
var result = array_19;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 20";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_20[i] = [];
    for(var j=32; j<36; j++) {
      var value_ = array_100[i][j];
      array_20[i][j] = value_;

    }   
}

for(var i=0; i<array_20.length; i++) {
  array_20[i] = array_20[i].filter(function (row) {
    return row != null;
  });
}



;
var count = array_20.length;
var result = array_20;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 21";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_21[i] = [];
    for(var j=36; j<40; j++) {
      var value_ = array_100[i][j];
      array_21[i][j] = value_;

    }   
}

for(var i=0; i<array_21.length; i++) {
  array_21[i] = array_21[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_21);
var count = array_21.length;
var result = array_21;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 22";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_22[i] = [];
    for(var j=0; j<4; j++) {
      var value_ = array_100[i][j];
      array_22[i][j] = value_;

    }   
}

for(var i=0; i<array_22.length; i++) {
  array_22[i] = array_22[i].filter(function (row) {
    return row != null;
  });
}



;
var count = array_22.length;
var result = array_22;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 23";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_23[i] = [];
    for(var j=4; j<8; j++) {
      var value_ = array_100[i][j];
      array_23[i][j] = value_;

    }   
}

for(var i=0; i<array_23.length; i++) {
  array_23[i] = array_23[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_23);
var count = array_23.length;
var result = array_23;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 24";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_24[i] = [];
    for(var j=12; j<16; j++) {
      var value_ = array_100[i][j];
      array_24[i][j] = value_;

    }   
}

for(var i=0; i<array_24.length; i++) {
  array_24[i] = array_24[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_24);
var count = array_24.length;
var result = array_24;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 25";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_25[i] = [];
    for(var j=16; j<20; j++) {
      var value_ = array_100[i][j];
      array_25[i][j] = value_;

    }   
}

for(var i=0; i<array_25.length; i++) {
  array_25[i] = array_25[i].filter(function (row) {
    return row != null;
  });
}



;
var count = array_25.length;
var result = array_25;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 26";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_26[i] = [];
    for(var j=20; j<24; j++) {
      var value_ = array_100[i][j];
      array_26[i][j] = value_;

    }   
}

for(var i=0; i<array_26.length; i++) {
  array_26[i] = array_26[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_26);
var count = array_26.length;
var result = array_26;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 27";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_27[i] = [];
    for(var j=24; j<28; j++) {
      var value_ = array_100[i][j];
      array_27[i][j] = value_;

    }   
}

for(var i=0; i<array_27.length; i++) {
  array_27[i] = array_27[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_27);
var count = array_27.length;
var result = array_27;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 28";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_28[i] = [];
    for(var j=28; j<32; j++) {
      var value_ = array_100[i][j];
      array_28[i][j] = value_;

    }   
}

for(var i=0; i<array_28.length; i++) {
  array_28[i] = array_28[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_28);
var count = array_28.length;
var result = array_28;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 29";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_29[i] = [];
    for(var j=32; j<36; j++) {
      var value_ = array_100[i][j];
      array_29[i][j] = value_;

    }   
}

for(var i=0; i<array_29.length; i++) {
  array_29[i] = array_29[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_29);
var count = array_29.length;
var result = array_29;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 30";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_30[i] = [];
    for(var j=36; j<40; j++) {
      var value_ = array_100[i][j];
      array_30[i][j] = value_;

    }   
}

for(var i=0; i<array_30.length; i++) {
  array_30[i] = array_30[i].filter(function (row) {
    return row != null;
  });
}



;
var count = array_30.length;
var result = array_30;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 31";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_31[i] = [];
    for(var j=0; j<4; j++) {
      var value_ = array_100[i][j];
      array_31[i][j] = value_;

    }   
}

for(var i=0; i<array_31.length; i++) {
  array_31[i] = array_31[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_31);
var count = array_31.length;
var result = array_31;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 32";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_32[i] = [];
    for(var j=4; j<8; j++) {
      var value_ = array_100[i][j];
      array_32[i][j] = value_;

    }   
}

for(var i=0; i<array_32.length; i++) {
  array_32[i] = array_32[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_32);
var count = array_32.length;
var result = array_32;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 33";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_33[i] = [];
    for(var j=8; j<12; j++) {
      var value_ = array_100[i][j];
      array_33[i][j] = value_;

    }   
}

for(var i=0; i<array_33.length; i++) {
  array_33[i] = array_33[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_33);
var count = array_33.length;
var result = array_33;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 34";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_34[i] = [];
    for(var j=12; j<16; j++) {
      var value_ = array_100[i][j];
      array_34[i][j] = value_;

    }   
}

for(var i=0; i<array_34.length; i++) {
  array_34[i] = array_34[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_34);
var count = array_34.length;
var result = array_34;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 35";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_35[i] = [];
    for(var j=16; j<20; j++) {
      var value_ = array_100[i][j];
      array_35[i][j] = value_;

    }   
}

for(var i=0; i<array_35.length; i++) {
  array_35[i] = array_35[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_35);
var count = array_35.length;
var result = array_35;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 36";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_36[i] = [];
    for(var j=20; j<24; j++) {
      var value_ = array_100[i][j];
      array_36[i][j] = value_;

    }   
}

for(var i=0; i<array_36.length; i++) {
  array_36[i] = array_36[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_36);
var count = array_36.length;
var result = array_36;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 37";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_37[i] = [];
    for(var j=24; j<28; j++) {
      var value_ = array_100[i][j];
      array_37[i][j] = value_;

    }   
}

for(var i=0; i<array_37.length; i++) {
  array_37[i] = array_37[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_37);
var count = array_37.length;
var result = array_37;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 38";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_38[i] = [];
    for(var j=28; j<32; j++) {
      var value_ = array_100[i][j];
      array_38[i][j] = value_;

    }   
}

for(var i=0; i<array_38.length; i++) {
  array_38[i] = array_38[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_38);
var count = array_38.length;
var result = array_38;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 39";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_39[i] = [];
    for(var j=32; j<36; j++) {
      var value_ = array_100[i][j];
      array_39[i][j] = value_;

    }   
}

for(var i=0; i<array_39.length; i++) {
  array_39[i] = array_39[i].filter(function (row) {
    return row != null;
  });
}



console.log(array_39);
var count = array_39.length;
var result = array_39;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }
  divOutput.innerHTML += "<br />";
divOutput.innerHTML += "Extracted Array warshall applied 40";
divOutput.innerHTML += "<br />";
divOutput.innerHTML += "<br />";
for(var i=0; i<4; i++) {
    array_40[i] = [];
    for(var j=36; j<40; j++) {
      var value_ = array_100[i][j];
      array_40[i][j] = value_;

    }   
}

for(var i=0; i<array_40.length; i++) {
  array_40[i] = array_40[i].filter(function (row) {
    return row != null;
  });
}



;
var count = array_40.length;
var result = array_40;

for (
    var i = 0;
     i < count; 
     i++
     ) 
  {

    for (
      var j = 0;
       j < count; 
       j++
       ) 
    {
      for (
        var k = 0;
         k < count; 
         k++
         )
      {

        result[i][j] = ( result[i][j] || ( result[i][k] && result[k][j] ) );
      }
    }

    if (i == count-1)
    {

      ShowData(result);

    }

  }




//ShowData
  function ShowData(result){

  var count = result.length;

  for (
    var i = 0;
     i< count;
      i++)
  {

    divOutput.innerHTML += "<br />";

    for (
      var j = 0;
      j<count;
      j++
      )
    {

      divOutput.innerHTML += result[i][j];

      divOutput.innerHTML += " ";

    }

  }

}//end sol1
timeSpan = performance.now();
divOutput.innerHTML += "<br/>Total Time Calculated " + timeSpan;
alert("<br/>Total Time Calculated " + timeSpan);

TESTER = document.getElementById('total');
  Plotly.plot( TESTER, [{
  x: timeSpan, 
  y: array_100 }], { 
margin: { t: 0 } }, {showSendToCloud:true} );

}