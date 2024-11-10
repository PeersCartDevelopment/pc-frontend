export const getApiUrl = () => {
    if(window.location.pathname.includes('localhost')) {
        return 'http://localhost:5001';
    }
    return 'https://13.210.211.232';
};