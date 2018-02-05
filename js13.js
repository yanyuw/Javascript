const injectSections = (items, sections) => /* TODO */
{
     sections.sort(function(a,b){
         return a.index - b.index;
     })
  	if(sections.length == 0){
    return items;
    }
  	
    for(var i = 0; i < sections.length; i++){
        items.splice(sections[i].index + i,0,sections[i].content);
  
    }
  	return items;
}
// var a= ['item1', 'item2', 'item3', 'item4', 'item5'],
//     b= [{ content: 'section1', index: 0 },
//         { content: 'section2', index: 2 }];

// injectSections(a,b) 
// console.log(a);// ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']