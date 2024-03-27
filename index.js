//promise的执行顺序2,5,3
// const promise = new Promise((resolve, reject) => {
//       console.log(2)
//       //resolve()
// }).then(()=>{
//    console.log(3);
// }).catch((err)=>{
//     console.log(4)
// });
// console.log(5)

// async function test(flag){
//     if(flag){
//         return "hello,world!"
//     }else{
//         return "oh no"
//     }
// }
// test().then(res=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
// console.log("翻滚吧异步")
//异步调用getresult方法
// function getnum(num){
//     return new Promise((resolve,reject)=>{
//         setInterval(()=>{
//             resolve(num * 2)
//         },2000)
//     })
// }
// async function getresult(){
//     let res = await getnum(10);
//     let res1 = await getnum(2);
//     let res2 = await getnum(5);
//     console.log(res)
//     console.log(res1)
//     console.log(res2)
// }
// getresult();

// var arr = [1,2,3,4,5,6,7];
// let r = arr.filter((data)=>{
//    return data % 2 == 0
// })
// console.log(r)
// var arr = ["a","",null,"","b",undefined,"  ","c"];
// let s = arr.filter((datas)=>{
//    return datas && datas.trim() //去掉空格
// })
// console.log(s)

//去除数组中的重复元素 一
 var r = []
 var arr =[2,2,3,4,4,5,6];
arr.forEach((i,index)=>{
        if(arr.indexOf(i) !== index){
            r.push(i)
        }
})
console.log(r)//【23456】
//二 filter
var r
r = arr.filter((element,index,self)=>{
    
    //indexof()//检索字符串第一次出现的位置0，没有则返回-1
    return self.indexOf(element) === index;
})
 //console.log(r)//【23456】
 //三 includes
//  let arr1 = []
//  for(var i =0;i<arr.length;i++){
//      if(!arr1.includes(arr[i])){
//         arr1.push(arr[i])
//      }
// }
//  console.log(arr1)
//哪个重复请输出


 //const obj ={ a:1,b:2};
 //obj.a = 2
 //console.log(obj);
// logNum();
// var logNum = function(){
//     console.log(2)
// };
// function logNum (){
//     console.log(1)
// };

// async function sleep(a){
//    await sleep(1);
//    console.log(a)
// };

    //map set的用法 
    const set = new Set([1,1,2,3,4])
    // set.add(5)
    // set.delete(1)
    // let a = set.has(1)
    //console.log(set)
    //console.log([...set])//[1,2,3,4]
    // .keys() 返回键名 .values()返回键值
    // console.log(set.keys())
    // console.log(set.values())
    const array = Array.from(set)
    //console.log(array)//[1,2,3,4]
    const map = new Map()
    map.set('k1',1)
    map.set('k2',2)
    map.delete('k2')
    
    // console.log(map.has('k1'))
    // new Promise((resolve)=>{
    //     resolve((()=>{
    //        console.log(1)
    //        return 2
    //    })())
    //     console.log(3)
    // }).then((arg)=>{
    //     console.log(arg)
    // })
    // setTimeout(()=>{
    //     console.log(4)
    // },0)
    // console.log(5)
//结构赋值
    // let book ={
    //     title:'入门到实战',
    //     isbn:'917',
    //     price:'98'
    // }
    // let arr =[1,3,4]
    // let [...newarr] = arr
    // let welcome = msg => msg
    // console.log(welcome('you'));
 //*****声明一个对象的类 */  
// var checkObj =  function(){
//     this.checkName = function(){
//         console.log('验证姓名')
//     }
//     this.checkEmail = function(){
//         console.log('验证邮箱')
//     }
    
// }


// var m = 1;
// var j = 0;
// function add(n){
//     return n = n+1
// };
// this.y = this.add(this.m);
// function add(n){
//     return n = n+3
// };
// this.z = this.add(this.m);
// console.log(this.y,this.z)

   var today = new Date()
    var days = today.getDate() + 5
    //console.log(days);
    
    var year = today.getFullYear()
    var hour = today.getHours()
    var minutes = today.getMinutes()
    console.log(year,hour,minutes);
    let target = {
        name:"tom",
        age:"11"
    }
    let handler = {
        get:function(target,key){
            //console.log("1",target[key]);
            return target[key]
            

        },
        set:function(target,key,value){
            //console.log("2",value);
            return target[key] = value
           
            
        }
    }
    let proxy = new Proxy(target,handler)
    proxy.name = "amy"
    //console.log(proxy.name);
    let targete = {}

// node
// const module = require('module-name')
// console.log(module);

const http = require('http')
    http.createServer(function(request,response){
        response.writeHead(200,{'Content-Type':'text/plain'})
        response.write("hihi")
        response.end('hello,word')

    }).listen(8888)
    
    
    



 











