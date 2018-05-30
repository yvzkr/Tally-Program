document.getElementById("tall-program").onclick = function(){
    var girdi = document.getElementById("tall-input").value;
    tallSkor(girdi);
};

function tallSkor(girdi){
    const hash = {};
    const getHash = (l)   => hash[l.toLowerCase()];
    const setHash = (l,v) => {hash[l.toLowerCase()] += v;}
    
    girdi.split('').forEach(harf => {
        if(!getHash(harf)) hash[harf.toLowerCase()] = 0;
        if(harf.toUpperCase() === harf) setHash(harf, -1)
        else setHash(harf, 1);
    });
    
    console.log(Object.entries(hash).map(val => `${val[0]}: ${val[1]}`).join(', '));
    
}