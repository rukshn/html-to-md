const Tag =require('../Tag')
const findValidTag=require('../findValidTag')
const findTagClass=require('../findTagClass')



class Tr extends Tag{
  constructor(str,tagName='tr'){
    super(str,tagName)
  }

  beforeMerge(){
    return '|'
  }


  handleContent(){
    let res=''
    let content=this.getContent()
    let getNxtValidTag=findValidTag(content)
    let [tagName,tagStr]=getNxtValidTag()
    while(tagStr!==''){
      if(tagName!=='td' && tagName!=='th'){
        throw new Error('should not have tags except <td> or <th> inside <tr>, current tag is '+tagName)
      }
      let SubTagClass=findTagClass(tagName)
      let subTag=new SubTagClass(tagStr,tagName)
      res+=subTag.execMerge('','')
      let nxt=getNxtValidTag()
      tagName=nxt[0]
      tagStr=nxt[1]
    }
    return res
  }

  execMerge(gapBefore='',gapAfter='\n'){
    return super.execMerge(gapBefore,gapAfter)
  }

}
module.exports=Tr



