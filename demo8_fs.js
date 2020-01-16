//uploading file
// npm install formidable --save

var http=require('http')
var formidable=require('formidable')

http.createServer((req,res)=>{
    if(req.url=='/fileupload')
    {
        var form=new formidable.IncomingForm();
        form.parse(req,(err,fields,files)=>{
            res.write('file uploaded');
            res.end();
        })
    }
    else
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit" value="submit"');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
console.log('listening on 8080')