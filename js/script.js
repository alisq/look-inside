url = 'https://lookinside.ocadu.gd/json/projects';


fetch(url)
  .then(response => response.json())
  .then(data => {
      for (i = 0;i<data.length;i++) {
          

          let item = new Project(data[i]);          
          $(item.displayTeaser)
                .appendTo('#container')
                .click(function(){                
                    $('body').append(item.displayFull)
                })
          
      }


      
  });


  