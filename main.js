function clienteDoServico(){
  let unorderedData = [
    {id:1, titulo:"Java How To Program", autor:"Deitel & Deitel", edicao:2007},
    {id:2, titulo:"Patterns of Enterprise Application Architecture", autor:"Martin Fowler", edicao:2002},
    {id:3, titulo:"Head First Design Patterns", autor:"Elisabeth Freeman", edicao:2003},
    {id:4, titulo:"Internet & World Wide Web: How to Program", autor:"Deitel & Deitel", edicao:2007}
  ];

  let orderedData = servicoDeOrdenacao(unorderedData.slice(),[
    {field:"edicao",asc:false},
    {field:"autor",asc:false},
    {field:"titulo",asc:true}
  ]);

  console.log(orderedData);
}

function servicoDeOrdenacao(data,orders){
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
