let touch = document.querySelectorAll(`.touch[data-id]`);
           

touch.forEach(element => {
    element.addEventListener('mousedown', () => {
        // Récupérer le data-id
        let id = element.dataset.id; console.log(id);
        // Jouer une mélodie au click
        let audio = document.querySelector(`audio[data-id=${id}]`);

        if(!audio) return;
        audio.play();

        // Si on lance un autre audio, l'audio précédent s'arrête
      document.addEventListener('play', function(e){
          var audios = document.getElementsByTagName('audio');
          for(var i = 0; i < audios.length; i++){
              if(audios[i] != e.target){
                  audios[i].pause();
              }
          }
      }, true);

      let touches = document.querySelector(`.touch[data-id=${id}]`);
      touches.classList.add('scale');

      touches.addEventListener('mouseup', () => {
          touches.classList.remove('scale');
      })

    })

    // Gestion du tactile sur mobiles

    element.addEventListener('touchstart', function touchStart(k) {

            // Récupérer le data-id
            let id = element.dataset.id; console.log(id);
            // Jouer une mélodie au click
            let audio = document.querySelector(`audio[data-id=${id}]`);

            if(!audio) return;
            audio.play();

            // Si on lance un autre audio, l'audio précédent s'arrête
            document.addEventListener('play', function(e){
                    var audios = document.getElementsByTagName('audio');
                    for(var i = 0; i < audios.length; i++){
                        if(audios[i] != e.target){
                            audios[i].pause();
                        }
                    }
                }, true);

                let touches = document.querySelector(`.touch[data-id=${id}]`);
                touches.classList.add('scale');

                touches.addEventListener('touchend', () => {
                    touches.classList.remove('scale');
            k.preventDefault();
            let pianoKey = k.target; console.log(pianoKey);
            let touch = k.touches[0]; console.log(touch);

           
            })
      
    }, false);
    
})
