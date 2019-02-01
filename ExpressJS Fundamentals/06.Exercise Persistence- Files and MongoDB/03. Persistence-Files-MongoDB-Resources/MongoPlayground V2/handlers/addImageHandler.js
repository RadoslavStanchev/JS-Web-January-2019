const formidable=require('formidable')
const Image =require('mongoose').model('Image')
const ObjectId=require('mongoose').Types.ObjectId

module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}
function addImage(req,res) {
  let form=new formidable.IncomingForm()

  form.parse(req,(err,fields,files)=>{
    let tags=fields.tagsId.split(',').reduce((p,c,i,a)=>{
      if(p.includes(c)||c.length===0){
        return p
      }
      else{
        p.push(c)
        return p
      }
    },[]).map(ObjectId)
   
    let image ={url:fields.imageUrl,
      description:fields.description,
      tags
    }
    Image.create(image).then(img=>{
      res.writeHead(302,{
        location:'/'
      })
      res.end()
    })
  })

}
function deleteImg(req,res){
  Image.deleteOne({_id:req.pathquery.id}).then(()=>{
    res.writeHead(302,{
      location:'/search'
    })
    res.end()
  }).catch((err)=>{
    console.log(err);
    
  })
}