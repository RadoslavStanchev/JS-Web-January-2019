const formidable=require('formidable')
const util = require('util');

const Tag =require('mongoose').model('Tag')



module.exports=  (req, res) => {
  if (req.pathname === '/generateTag' && req.method === 'POST') {
    let form= new formidable.IncomingForm()
    form.parse(req,(err,fields,files)=>{
      let name = fields.tagName
      Tag.create({
        name
      }).then(tag=>{
        res.writeHead(302,{
          location:'/'
        })
        res.end()
      }).catch(err=>{
        console.log(err);
        
      })
      

    })

  } else {
    return true
  }
}