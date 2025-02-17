const fs=require("fs");

const write=()=>{
    //const data="i am a writer"
fs.writeFile("./data.text","utf8",(err, data)=>{
    if(err)
        console.log("error writing",err);
    else
        console.log("File written successfully");
})

}
// console.log("Before reading")
write("i am a writer");
// console.log("After reading")