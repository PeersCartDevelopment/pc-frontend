export const getApiUrl = () => {
    if(window.location.pathname.includes('localhost')) {
        return 'https://pcbackend-7g1k.onrender.com';
    }
    return 'https://pcbackend-7g1k.onrender.com';
};