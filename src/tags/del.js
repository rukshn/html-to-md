const Tag =require('../Tag')
const findValidTag=require('../findValidTag')
const findTagClass=require('../findTagClass')

class Del extends Tag{
  constructor(str,tagName='del',{parentTag}={}){
    super(str,tagName)
    this.parentTag=parentTag
  }

  beforeMerge(){
    return "~~"
  }

  afterMerge(){
    return '~~'
  }


  handleContent(){
    let content=this.getContent()
    let getNxtValidTag=findValidTag(content)
    let res=''
    let [tagName,tagStr]=getNxtValidTag()
    while(tagStr!==''){
      if(tagName!=null){
        let SubTagClass=findTagClass(tagName)
        let subTag=new SubTagClass(tagStr,tagName)
        res+=subTag.execMerge('','')
      }else{
        res+=tagStr
      }
      let nxt=getNxtValidTag()
      tagName=nxt[0]
      tagStr=nxt[1]
    }
    return res
  }

  execMerge(gapBefore=' ',gapAfter=''){
    return super.execMerge(gapBefore,gapAfter)
  }

}


module.exports=Del



let del=new Del('<del><a href="https://github.com/nodeca/babelfish/"><i>babelfish</i></a></del>')
//
console.log(del.execMerge())