var app = new Vue ({
    el: '#app',
    
    data: {
        path: 1,
        pathTitle: ["Norwich Youth Soccer League Home","About Norwich Youth Soccer League","Norwich Youth Soccer League Contact Information", "Norwich Youth Soccer League Game Information", "Registration Form", "Rules of Play & Policies"],
        collapseMenuPath: 0
    },
    
    methods: {
        
        pathChanger: function(newPath){
            this.path = newPath;  
        },
        
        collapseMenuChanger: function(newMenu){
            this.collapseMenuPath = newMenu;
        }
    }
    
})
