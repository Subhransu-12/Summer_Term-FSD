const addPara=document.querySelector('#add-para');
const blogDetails=document.querySelector('.blog-details');
const publishbtn=document.querySelector('#navi-btn');


publishbtn.addEventListener('click',()=>{
    alert('Your blog is saved');
})


addPara.addEventListener('click',(event)=>{
    const paraContainer=document.createElement('div');
    paraContainer.classList.add='blog-para';
    const paragraph=document.createElement('p');
    paragraph.classList.add='title';
    paragraph.setAttribute.role='textarea';
    paragraph.setAttribute.spellcheck='false';
    paragraph.setAttribute("contenteditable",true);
    paragraph.style.fontWeight='light';
    paraContainer.appendChild(paragraph);
    blogDetails.appendChild(paraContainer);
    paragraph.innerHTML='keep writing';
    paragraph.style.fontSize='2.5vh';
})