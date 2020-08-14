var uglyArray =  [[1,2,[3,[5]]],4]; 

//Chase
function flatten(items) {
    const flat = [];
  
    items.forEach(function(item) {
      if (Array.isArray(item)) {
        console.log(flat);
        flat.push(...flatten(item));    
console.log(flat);
      } else {
        flat.push(item);
        
      }
    });

    return flat;
  }

flatten(uglyArray);

What it do 

As you code, you want to save work AND commit often to check for bugs in your code and to see where mistakes were made a long the way