let defaultData = [
  {id:1, titulo:"Java How To Program", autor:"Deitel & Deitel", edicao:2007},
  {id:2, titulo:"Patterns of Enterprise Application Architecture", autor:"Martin Fowler", edicao:2002},
  {id:3, titulo:"Head First Design Patterns", autor:"Elisabeth Freeman", edicao:2003},
  {id:4, titulo:"Internet & World Wide Web: How to Program", autor:"Deitel & Deitel", edicao:2007}
];

exports.defaultData = defaultData;

let byTitleAsc = {field:"titulo",asc:true};
let byTitleDesc = {field:"titulo",asc:false};
let byAuthorAsc = {field:"autor",asc:true};
let byAuthorDesc = {field:"autor",asc:false};
let byEditionAsc = {field:"edicao",asc:true};
let byEditionDesc = {field:"edicao",asc:false};

let orders; // undefined as default

//orders = [byTitleAsc];
//orders = [byAuthorAsc, byTitleDesc];
orders = [byEditionDesc, byAuthorDesc, byTitleAsc];
//let orders = [];

exports.orders = orders;
