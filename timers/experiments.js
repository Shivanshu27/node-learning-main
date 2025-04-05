const x = ()=> {
    console.log(1);
    setTimeout(function() {
      console.log(2)
    }, 2000);
    setTimeout(function() {
      console.log(3)
    }, 0);
    console.log(4);
  };

  x();


