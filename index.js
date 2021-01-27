import generator from './RandomeNumberGenerator.js'

let silderData,currentIndex;
window.onload=()=>{
    document.getElementById('slider').style.display="none";
    fetch("https://picsum.photos/list")
    .then(res=>{
        if(res.ok)
            return res.json()
        else
            Promise.reject(res)
    })
    .then(data=>{
        document.getElementsByClassName('loader')[0].style.display="none";
        document.getElementById('slider').style.display="block";
        let startingIndex=generator(0,983)
        silderData=data.slice(startingIndex,startingIndex+10)
        document.getElementById("currentImage").src=`https://picsum.photos/600/400?image=${silderData[0].id}`
        currentIndex=0
        document.getElementById("currentNumberText").innerHTML=`${currentIndex+1} / 10`
        document.getElementById("currentAuthor").innerHTML=`@${silderData[0].author}`
    })
    .catch(err=>{
        console.warn(err)
    })
}

document.getElementById ("prev").addEventListener ("click", previous, false);
document.getElementById ("next").addEventListener ("click", next, false);

function next(){
    if(currentIndex<9){
     currentIndex++;
     document.getElementById("currentAuthor").innerHTML=`@${silderData[currentIndex].author}`
     document.getElementById("currentNumberText").innerHTML=`${currentIndex+1} / 10`
     document.getElementById("currentImage").src=`https://picsum.photos/600/400?image=${silderData[currentIndex].id}`
    }
}

function previous(){
    if(currentIndex>0){
     currentIndex--;
     document.getElementById("currentAuthor").innerHTML=`@${silderData[currentIndex].author}`
     document.getElementById("currentNumberText").innerHTML=`${currentIndex+1} / 10`
     document.getElementById("currentImage").src=`https://picsum.photos/600/400?image=${silderData[currentIndex].id}`
    }
}
