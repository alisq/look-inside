url = 'https://lookinside.ocadu.gd/json/projects';


fetch(url)
  .then(response => response.json())
  .then(data => {
      for (i = 0;i<data.length;i++) {
          

          let item = new Project(data[i]);          
          $(item.displayTeaser)
                .appendTo('#container')
                .click(function(){      
                    $('.project-full').remove()          
                    $('body').append(item.displayFull)

                    $('.carousel').flickity({
                        // options
                        cellAlign: 'left',
                        contain: true,
                        wrapAround:true
                        // prevNextButtons: false
                      });
                })
          
      }


      
  });


  

  $(document).on('click','.project-full, .close',function(e){
    if(e.target !== e.currentTarget) return;

      $('.project-full').remove();
  })