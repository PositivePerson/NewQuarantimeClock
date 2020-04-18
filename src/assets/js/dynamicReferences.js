
function changeHeight(countriesAmount) {
    var height = 4.5 + countriesAmount*2.9;
  
    console.log("height is: " + height);
    document.head
    .insertAdjacentHTML('beforeend',
    '<style>#references:hover{height:' + height + 'em;}</style>');
    // return (2.5 + countriesAmount*2.9);
    console.log("adding inline style done");
  }
  