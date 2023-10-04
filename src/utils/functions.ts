
export const ObjectInArrayOfObject = (obj: any) => {
  let postsArray: any = []
  Object.keys(obj).map((personNamedIndex: any) => {
    let post_value = obj[personNamedIndex];
    // do something with person
    postsArray.push(post_value);
  });
  return postsArray;
}
export const ObjectIsEmpty = (obj: Record<string, any>): boolean => {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}
