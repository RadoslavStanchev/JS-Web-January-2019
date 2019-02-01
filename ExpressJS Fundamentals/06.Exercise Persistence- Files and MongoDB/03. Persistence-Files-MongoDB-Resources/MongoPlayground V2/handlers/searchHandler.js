const fs=require('fs')
const Image =require('mongoose').model('Image')
const Tag =require('mongoose').model('Tag')

module.exports = (req, res) => {

  if (req.pathname === '/search') {
    
    fs.readFile('./views/results.html','utf8',(err,file)=>{
      if(err){
        throw err
      }
      const params={}
      if(req.pathquery.afterDate){}
      if(req.pathquery.beforeDate){}
      if(req.pathquery.Limit){}

      if(req.pathquery.tagName){
        let tags=req.pathquery.tagName.split(',').filter(e=>e.length>0)
        if(tags.length>0){
          Tag.find({name:{$in:tags}}).then(data=>{
           let tagsIds= data.map(m=>m._id)
           params.tags=tagsIds
           getImagesAndRespond(params)
           
          })
        }else{
          getImagesAndRespond(params)
        }
      }
      function getImagesAndRespond(params){
        Image.find(params).then((data)=>{
          let imgHTML=''
          for (const image of data) {
            imgHTML+=imageTemplate(image)
            
          }
          file=file.replace('<div class="replaceMe"></div>',imgHTML)
          res.writeHead(200,{
            'content-type':'text/html'
          })
          res.write(file)
          res.end()
        })
      }

      

      
    })
   
  } else {
    return true
  }
}

function imageTemplate(image){
  return `<fieldset id =${image._id}>
  <img src="${image.url}">
  </img><p>${image.description}<p/>
  <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
  </button> 
  </fieldset>`
  
}