var app = new Vue ({
    el: '#app',
    
    data: {
        path: 6,
    },
    
    methods: {
        pathChanger: function(newPath){
            this.path = newPath;
        }
    }
    
})