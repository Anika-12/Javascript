

    var vaxTrial =([ A=[
        { name: 'Biplap', age: 22, temperature: 98 },
       { name: 'Sunil', age: 21, temperature: 98 }],
    
    B=[
     { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37,temperature: 99 }],
    C=[
      { name: 'Paul', age: 42, temperature: 98 }, 
    { name: 'Kat', age: 41,temperature: 98 }],
    D=[
      { name: 'Nayem', age: 50, temperature: 100 }, 
       { name: 'Sabnaj', age: 51,
      temperature: 101 }] ]);
    
      vaxTrial.sort(function(a, b) {
        return a - b;
      });
     
    console.log(vaxTrial);
                       
                         
         


    
