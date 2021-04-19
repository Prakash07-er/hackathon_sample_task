// const form = document.getElementById('myform')
// const searchForm = 
// form.addEventListener('submit', function(e)
// {
//     e.preventDefault()

//     var search = document.getElementById('search').value


//     var name = search.split(' ').join('');


//     document.getElementById('result').innerHTML=""

//     var url =   `https://api.github.com/search/users?q=${}`;

//     async function git_user_search(){
//         var result = await fetch(url);
//         var data = await result.json();
//         console.log(data);

//         document.getElementById('result').innerHTML=`
//         <a target = "_blank" href="https://www.github.com/${name}"> <img style="width:100px; height:100px; border-color:black; margin-right:40px;" src="${data.avatar_url}"/ > </a>
//         `   
//      }
//      git_user_search()

// })









const searchForm = document.querySelector('form');
const searchResult =  document.querySelector('.search-result');
const container = document.querySelector('.container');



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);
    fetchAPI();
});

async function fetchAPI (){
    const baseURL = `https://api.github.com/search/users?q=${searchQuery}`;
    // const  =  `https://api.github.com/users/ ${searchQuery}&repos` ; 

    const response = await fetch(baseURL); 
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < items.length; i++) {
        const para = document.querySelector('item-data')
        para.innerHTML =  `${data.items[i].login}`;

        document.body.append(para)
    }}









