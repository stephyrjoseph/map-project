

document.addEventListener("DOMContentLoaded", function () {

    const map = createMap('map', 22.9074872, 79.07306671);
    const searchLayer = L.layerGroup();

    searchLayer.addTo(map);

   

    document.querySelector("#toggleSearchBtn").addEventListener("click", function () {

        const searchContainer = document.querySelector("#search-container");
        const style = window.getComputedStyle(searchContainer);
        // if the search container is already visible, we'll hide it
        if (style.display != "none") {
            searchContainer.style.display = "none";
        } else {
            // otherwise, show it
            searchContainer.style.display = 'block';
        }


    });

    document.querySelector("#searchBtn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#searchTerms").value.toLowerCase();
        const response = await axios.get("./location.json");
        const responseData = response.data
        let searchContainer = [];
       
        const myIcon = L.icon({
            iconUrl: '../icons/tool.png',
            iconSize: [32, 32]
        })
        const markerGroup = L.layerGroup();
        for (let item of responseData.tourist_attraction) {
            // console.log(item)
            const name = item.name.toLowerCase();
            if (name.includes(searchTerms))
                searchContainer.push(item);

            
            markerGroup.addTo(map);
            for (let item of searchContainer) {
                if (item.location && item.location.lat !== undefined && item.location.lng !== undefined) {
                    const marker = L.marker([item.location.lat, item.location.lng], { icon: myIcon }).addTo(map);
                    marker.bindPopup(`<br>${item.name}</br><br>${item.info}</br>
                        <br><img src="${item.images}" style="width:300px; max-height:300px;">`)
                    marker.addTo(markerGroup)

                }
               
            }
            
        }

        L.control.layers({}, {
            'Markers': markerGroup
        }).addTo(map);     
    }


    )



   

})

//tourist_attraction.location.lat
//tourist_attraction.location[0].lng









let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
imgBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#img-slider').src = src;
    });
});


































// let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');
// let imgBtn = document.querySelectorAll('.img-btn');

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// menu.addEventListener('click', () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// });

// formBtn.addEventListener('click', () =>{
//     loginForm.classList.add('active');
// });

// formClose.addEventListener('click', () =>{
//     loginForm.classList.remove('active');
// });
// imgBtn.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src = btn.getAttribute('data-src');
//         document.querySelector('#img-slider').src = src;
//     });
// });

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//     },
// });

