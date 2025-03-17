import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";


import {createImageCard} from './js/render-functions';
import {fetchData} from './js/pixabay-api';

let lightbox; 

const refs = {
    searchForm: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
}

const onSearchImage = event => {
    event.preventDefault();

const query = event.currentTarget.elements["search-text"].value.trim();

    if (query === ''){
        iziToast.warning({
            title: 'Warning',
            message: 'Поле не має бути порожнім!',
            position: 'topRight'
        });
        return;
    }

    refs.loader.classList.remove('hidden');

    fetchData(query).then(({hits}) => {
        if (hits.length === 0){
            iziToast.warning({
                title: 'Warning',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
            refs.searchForm.reset();
            refs.gallery.innerHTML = "";    

            return;
        }    

        const imageCard = hits.map(img => createImageCard(img)).join('');
        refs.gallery.innerHTML = imageCard;

        
        if (!lightbox) {
            lightbox = new SimpleLightbox('.gallery-link', { captionsData: 'alt', captionDelay: 250 });
        } else {
            lightbox.refresh();
        }
    }).catch(err => {
        console.log(err);
    }).finally( () => {
        refs.loader.classList.add('hidden'); // Приховуємо спінер після завантаження
    });

}

refs.searchForm.addEventListener('submit', onSearchImage);


