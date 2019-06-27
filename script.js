var app = new Vue ({
    el: '#app',
    
    data: {
        path: 1,
        collapseMenuPath: 0,
    },
    
    methods: {
        
        pathChanger: function(newPath){
            this.path = newPath;  
        },
        
        collapseMenuCahnger: function(newMenu){
            this.collapseMenuPath = newMenu;
        }
    }
    
})