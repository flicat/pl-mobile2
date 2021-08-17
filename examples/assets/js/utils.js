/**
 *
 * @param {*} source 源数组
 * @param {*} count 要取出多少项
 * @param {*} isPermutation 是否使用排列的方式
 * @return {any[]} 所有排列组合,格式为 [ [1,2], [1,3]] ...
 */
function getNumbers(source, count, isPermutation = false) {
  //如果只取一位，返回数组中的所有项，例如 [ [1], [2], [3] ]
  let currentList = source.map(item => [item]);
  if (count === 1) {
    return currentList;
  }
  let result = [];
  //取出第一项后，再取出后面count - 1 项的排列组合，并把第一项的所有可能（currentList）和 后面count-1项所有可能交叉组合
  for (let i = 0; i < currentList.length; i++) {
    let current = currentList[i];
    let children = [];
    if (isPermutation) {
      //如果是排列的方式，在取count-1时，源数组中排除当前项
      children = getNumbers(source.filter(item => item !== current[0]), count - 1, isPermutation);
    } else {
      //如果是组合的方法，在取count-1时，源数组只使用当前项之后的
      children = getNumbers(source.slice(i + 1), count - 1, isPermutation);
    }
    for (let child of children) {
      result.push([...current, ...child]);
    }
  }
  return result;
}

export function getCombinationList(props) {
  const list = []
  let combinationSize = 0
  Object.keys(props).map(type => {
    let attrKeys = Object.keys(props[type])
    combinationSize += attrKeys.length
    attrKeys.map(attr => {
      props[type][attr].forEach(value => {
        list.push({ type, attr, value })
      });
    })
  })
  const combinationList = []
  for (let i = 0; i < combinationSize; i++) {
    combinationList.push(...getNumbers(list, i + 1))
  }

  const newCombinationList = []
  combinationList.forEach(subArray => {
    const newProps = {}
    for (let i = subArray.length; i--;) {
      let { type, attr, value } = subArray[i]
      if (newProps[type] === undefined) {
        newProps[type] = {}
      }
      if (newProps[type][attr] === undefined) {
        newProps[type][attr] = value
      } else {
        return;
      }
    }
    newCombinationList.push(newProps)
  });
  return newCombinationList
}
