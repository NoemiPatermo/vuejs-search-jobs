Vue.config.devtools = true;
new Vue (
    {
        el:"#app",
        data:{
            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                }, 
                {
                    id: 2,
                    company: 'Secundis',
                    position: 'Python Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '4/22/2021',
                    logo: 'logo.jpg',
                    city: 'Napoli',
                    contract: 'Full Time'
                  }, 
                {
                    id: 3,
                    company: 'Strabiliantis',
                    position: 'Full Stack Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '1/22/2021',
                    logo: 'logo.jpg',
                    city: 'Firenze',
                    contract: 'Full Time'
                  }, 
            ],
            starred: [],
            applied: []
            
        },//chiude il data
        methods: {
            addToFav: function(starred,id) {
                starred.push(id)
            },
            removeToFav: function(starred,id) {
                let index = starred.indexOf(id)
                starred.splice(index, 1)
            },
            applyOn: function(applied,id) {
                applied.push(id)
            setTimeout(() => {
                let modal = document.querySelector('.application-sent');   
                let closeButton = document.querySelector('.application-sent .close');
                modal.style.display = 'block'; 
                closeButton.addEventListener('click', function () {
                    modal.style.display = 'none';
                })
                }, 1000);
            },
            remove: function(applied,id){
                let form = applied.indexOf(id)
                applied.splice(form, 1)
            },
            
            
        }//chiude il methods

});//chiude la vue