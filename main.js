console.log('test');

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(BASE_URL +'/todos'+ API_KEY).then((res)=>{
    console.log("Success: ",res);


}).catch((err)=>{
    console.log('Error: ',err);
})

const newItem={
    title: 'Here is my new Item',
    details: 'Here are the details to my todo item'
};

axios.post(BASE_URL+'/todos'+API_KEY, newItem).then(res=>{
    console.log("ADD Response: ",res)
}).catch(err=>{
    console.log('Post Error: ',err)
})
