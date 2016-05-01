var fs = require('fs-extra');

fs.copy('./_book', '../angular2-workshop-resources/public', {clobber:true}, function(err){
    if (err) {
        console.log(err);
    }

    console.log('done copying...');
})