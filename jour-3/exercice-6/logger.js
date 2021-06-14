const fs = require("fs/promises");

const directoryExistsForDate = async (structure)=>{
    try {
        await fs.opendir(structure);
        return true;
    }catch(e){
        // console.log(e);
        return false;
    }
}
const getDirectoryStructureForDate = (date)=>{
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()+1}`;
}
const generateDirectoryForDate = async (date,structure)=>{
    if(await directoryExistsForDate(structure)){
        return false;
    }
    await fs.mkdir(structure,{recursive:true});
    return structure;
}

exports.log = async(type, message) =>{
    const date = new Date();
    const structure = getDirectoryStructureForDate(date);
    await generateDirectoryForDate(date,structure);
    const filename = `${date.getHours()}.log`;
    await fs.appendFile(`${structure}/${filename}`,`--${type}--${message}\n`);
    console.log('log')
};

exports.removeLogs = async ()=>{
    const date = new Date();
    const structure =  getDirectoryStructureForDate(date);
    const filename = `${date.getHours()}.log`;
    await fs.writeFile(`${structure}/${filename}`,'');
}