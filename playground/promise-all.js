var doWork = new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve('Data from doWork')
    }, 1000);
  }); 
   
  var otherWork = new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve('Data from otherWork')
    }, 5000);
  });
   
  Promise.all([doWork, otherWork]).then((values) => {
    // This function won't run for 5 seconds, even though doWork only takes a second.
    console.log(values);
  }, (e) => {
    console.log(e);
  });
  