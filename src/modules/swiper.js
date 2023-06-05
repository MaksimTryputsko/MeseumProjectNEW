import Swiper,{ Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop:true,  
});
export { swiper }
