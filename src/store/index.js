import { store } from 'react-easy-state';

const appStore = store({
    page: undefined,
    changePage(page){
        appStore.page = page
    }
});
export default appStore;

export function changePage (page) {
    console.log(page);
    appStore.page = page
}