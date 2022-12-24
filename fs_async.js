const {readFile,writeFile}=require('fs')


console.log('start')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first=result
    readFile('./content/first.txt','utf-8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const second=result

        writeFile('./content/result_async.txt',
        `here is the result ${first},${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with task')
        }
        )
    })
    
})