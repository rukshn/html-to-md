const Tag =require('../Tag')
const SelfCloseTag =require('../SelfCloseTag')
const {needIndependentLine,getRealTagName} =require('../utils')
/*
*
* <div><b>abc</b></div>
* ==> **abc**
*
* */

class __Skip__ extends Tag{
  constructor(str,tagName='__skip__',options){
    super(str,tagName,options)
    this.noNeedWrap=['td','th']
    this.tagName=tagName
  }

  exec(){
    let need=needIndependentLine(getRealTagName(this.tagName)) && !this.noNeedWrap.includes(this.parentTag)
    let pre=need ? '\n' : '', aft=need ? '\n' : ''
    return super.exec(pre,aft)
  }
}

class __SkipSelfClose__ extends SelfCloseTag{
  constructor(str,tagName='__skipselfclose__',options){
    super(str,tagName,options)
  }

  exec(){
    return this.str
  }

}

module.exports={__Skip__,__SkipSelfClose__}


