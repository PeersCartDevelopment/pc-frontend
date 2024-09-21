export const getApiUrl = () => {
    if(window.location.pathname.includes('localhost')) {
        return 'http://localhost:5001';
    }
    return 'https://pc-backend-17gq.onrender.com';
};