console.log("start");
function getName(name,callback){
    //return name;
    setTimeout(()=>{
        console.log("ïnside timeout");
        callback(name)
    },2000)
}
const nm=getName('REKHA RANI',function(nm){
    console.log(nm);
});
//console.log(uName);
console.log("END");
