var tag = 'nothing'

function buttonClicked(buttonId) {
    tag = buttonId;
    console.log('in function button click');
    console.log(tag);
    // ...
    tagHandoff(tag)
}

function tagHandoff(tag) {

    var csrf_token = document.getElementsByName('csrfmiddlewaretoken')[0].value;

    $.ajax({
        type: "POST",
        url: "geturl/",
        headers: {
            'X-CSRFToken': csrf_token
        },
        data: {
            'tag': tag
        },
        success: function(data, tag) {
            var url = data.urls;
            console.log(url)
            console.log(data)
            $('#touhouimg').attr('src', url);
            document.getElementById('touhouimg').src = url;
            /*
            var url = data.url;
            console.log(url);
            console.log(data.tag);
            console.log("======");
            cont = document.getElementById(data.tag);
            document.getElementById(data.tag).innerHTML = '';
            const img = document.createElement('img');
            img.src = url;
            cont.appendChild(img);
            */
        }
    });
}


function update_image(url, tag) {
    console.log(url)
    console.log(tag)
    cont = document.getElementById('tag')
    document.getElementById('tag').innerHTML = ''
    const img = document.createElement('img');
    img.src = url;
    cont.appendChild(img);
}

/*

const remButton = document.getElementById('remilia_scarlet');
const youButton = document.getElementById('konpaku_youmu');
const suiButton = document.getElementById('ibuki_suika');
const reiButton = document.getElementById('reisen_udongein_inaba');


const cont = document.getElementById('image-container')

remButton.addEventListener('click', () => {
    document.getElementById('image-container').innerHTML = ''
    const img = document.createElement('img');
    img.src = 'https://safebooru.org/images/4064/c973350af0741c2e3a2fd82ba93152809ca5dbb9.png';
    cont.appendChild(img);
});

youButton.addEventListener('click', () => {
    document.getElementById('image-container').innerHTML = ''
    const img = document.createElement('img');
    img.src = 'https://safebooru.org/images/4060/d0fb6c1140231a0a74f55aceeb77f771a5b4757d.jpg';
    cont.appendChild(img);
});

suiButton.addEventListener('click', () => {
    document.getElementById('image-container').innerHTML = ''
    const img = document.createElement('img');
    img.src = 'https://safebooru.org/images/1942/f385430b6eeda653e5067b4237a292a9f2514df4.png';
    cont.appendChild(img);
});

reiButton.addEventListener('click', () => {
    document.getElementById('image-container').innerHTML = ''
    const img = document.createElement('img');
    img.src = 'https://safebooru.org//images/4066/fca63c2adeefad8d477a9670351e501422c783c0.jpg';
    cont.appendChild(img);
});


*/