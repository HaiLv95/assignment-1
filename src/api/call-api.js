
import instance from './instance';
export const getAll = () =>{
    const url = `/product`;
    return instance.get(url);
}
export const get =  (id) =>{
    const url = `/product/${id}`;
    return instance.get(url);
}
export const update =  (user) =>{
    const url = `/product/${user.id}`;
    return instance.put(url, user);
}
export const add = (user) =>{
    const url = `/product/`;
    return instance.post(url, user);
}
export const remove = (id) => {
  const url = `/product/${id}`;
  return instance.delete(url);
};
