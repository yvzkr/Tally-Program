document.getElementById("tall-program").onclick = function(){
    var girdi = document.getElementById("tall-input").value;
    tallProgram(girdi);
};


function tallProgram(girdi){
    var oyuncular = {a:0,b:0,c:0,d:0,e:0};
    
    for(var i=0; i < girdi.length;i++){
        
        switch(girdi[i]){
                case "a"|| "A": oyuncular.a+=1; break;
                case "b"|| "B": oyuncular.b+=1; break;
                case "c"|| "C": oyuncular.c+=1; break;
                case "d"|| "D": oyuncular.d+=1; break;
          
                default: console.log("bulunamadı"); break;
        } 
        
    }
    console.log(oyuncular);
}

