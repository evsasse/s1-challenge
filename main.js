let config = require("./config.js");

function clienteDoServico(){
  let unorderedData = config.defaultData;

  let orderedData = servicoDeOrdenacao(unorderedData.slice());

  console.log(orderedData);
}

function servicoDeOrdenacao(data,orders = config.orders){
  if(!orders) throw "OrderingException";
  if(orders.length === 0) return [];

  // inverte para fazer as ordernacoes menos prioritarias primeiro
  orders = orders.reverse();

  return orders.reduce((prv,cur)=>{
    return prv.sort((a,b)=>{
      if(cur.asc)
        return a[cur.field]>b[cur.field];
      else
        return a[cur.field]<b[cur.field];
    });
  }, data);
}

clienteDoServico();
