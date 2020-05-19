/**
 *  此文件主要编写一些公共的方法
 * */

/** 检验参数是否是其中之一 */
function isValidatorOneOf(value,validList){
  const result = validList.find(v=> v === value);
  if(result){
    return true;
  }else{
    return false;
  }
}

export {
  isValidatorOneOf //检验参数是否是其中之一
}
