export const getApiUrl = () => {
    if(window.location.pathname.includes('localhost')) {
        return 'http://localhost:5001';
    }
    return 'https://pcbackend-7g1k.onrender.com';
};