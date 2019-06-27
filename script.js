var app = new Vue ({
    el: '#app',
    
    data: {
        path: 1,
    },
    
    methods: {
        pathChanger: function(newPath){
            this.path = newPath;
        }
    }
    
})