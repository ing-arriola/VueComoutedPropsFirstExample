new Vue({
    el:'#exercise',
    data:{
        counter:0,
        secondCounter:0
    },
    computed:{
        //The important thing about this is .... you only can execute this when a computed propertie
        //is changed.... but at this moment this is not clearly defined on this code :(
        //may be later i will double check this :)
            secondResult:function(){    
                console.log("computed")
                return this.secondCounter>5 ? 'Greater':'Smaller than 5'
         }
    },
    methods:{
        //This method has a problem wich is .... this is executed every time that one propertie is changed
        //it could be a problem if the method is really big and it takes a considerable amount of time
        //to be executed
        result:function (){
            console.log("Normal Method")
            return this.counter>5 ? 'Greater':'Smaller than 5'
        }
    }

})