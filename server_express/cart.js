let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    console.log(req.query);
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};
// let reduce = (cart, req) => {
//     let find = cart.contents.find(el => el.id_product === +req.params.id);
//     find.quantity -= req.body.quantity;
//     return JSON.stringify(cart, null, 4);
// };
let dlt = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    let index = cart.contents.indexOf(find);
    cart.contents.splice(index, 1);
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    // reduce,
    dlt
};