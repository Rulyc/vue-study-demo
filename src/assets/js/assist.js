/**  组件的通信之 找到任意组件实例方法 -----findComponents系列方法
 *                 context 当前节点(this)     componentName要找到的组件name
 * */


/**
 * 由一个组件，向上找到最近得指定组件
 * 与dispatch方式不同的是，findComponentUpward 是直接拿到组件 的实例
 * eg: A为父组件组件中定义了sayHello () { console.log('Hello, Vue.js'); }
 *     B为子组件中直接调用const comA = findComponentUpward(this, 'componentA');comA.sayHello();
 * */
function findComponentUpward(context,componentName){
  let parent = context.$parent; // 获取当前节点的父节点
  let name = parent.$options.name // 得到父节点的名字

 /**
  *  while循环体中不断覆盖当前的parent对象，通过判断组件（即parent）的name与传入的componentName是否一致
  *  直到找到最近的一个匹配组件为止
  * */
  while(parent && (!name || [componentName].indexOf(name)<0)){ // 当前节点的父节点存在，且（当前父节点的名字不存在 或者要找的组件不等于当前父节点的名字）
    parent = parent.$parent; // 获取此时父节点的父节点给parent
    if(parent){ // 如果存在
      name = parent.$options.name // 获取此时的节点名称
    }
  }
  return parent;
}

/**
 * 有一个组件， 向上找到所有的指定组件
 * 与 findComponentUpward 不同的是，findComponentsUpward 返回的是⼀个数组,包含了所有找到的组件实例
 * ⼀般只⽤在递归组件⾥⾯,因为这个函数是⼀直向上寻找⽗级 （parent）的，只有递归组件的⽗级才是⾃身
 * */
function findComponentsUpward(context, componentName){
  let parents = [];
  const patent = context.$parent; // 当前节点的父节点

  if(parent){ // 如果当前组件的父节点存在的时候
    if(parent.$options.name === componentName){ // 如果当前组件的父节点的name === 指定查找的组件name
      //
      return parent.concat(findComponentsUpward(parent,componentName))
    }else{
      return [];
    }

  }
}

/**  由一个组件，向下找到最近的指定组件 */
function findComponentDownward(context, componentName){
  const childrens = context.$children; // 获取当前节点的孩子节点
  let children = null;
  if(childrens.length){ // 如果当前节点存在孩子节点
    for(const child of childrens){
      const name = child.$options.name;
      if(name === componentName){ // 如果name === 指定节点的name
        children = child; // 赋值并中止
        break;
      }else{
        // 没找到匹配的组件name，就继续递归找每个$children 的 $children，直到找到为止
        children = findComponentDownward(child,componentName);
        if(child){
          break;
        }
      }
    }
  }
  return children
}

/**  由一个组件，向下找到所有的指定的组件 */
function findComponentsDownward(context, componentName){
  return context.$children.reduce((components,child)=>{
    if(child.$options.name === componentName){
      components.push(child);
    }
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  },[])
}

/** 由一个组件，找到指定组件的兄弟组件 */   // exceptMe是否把自身除外，默认为true
function findBrotherComponents(context,componentName,exceptMe = true){
  // context.$parent.$children获取父组件全部的子组件，进行过滤得到所有是指定组件的集合
  let res = context.$parent.$children.filter(item=>{
    return item.$options.name === componentName
  })

  /**  Vue.js 在渲染组件时，都会给每个组件加⼀个内置的属 性 _uid，这个 _uid是不会重复的，
   * 借此我们可以从⼀系列兄弟组件中把⾃⼰排除掉
   * */
  // 查找到自身自身组件的index
  let index = res.findIndex(item => item._uid === context._uid);
  // 如果排除自身，截取掉
  if(exceptMe){
    res.splice(index,1)
  }

  return res
}
export {
  findComponentUpward,
  findComponentsUpward,
  findComponentDownward,
  findComponentsDownward,
  findBrotherComponents
};

