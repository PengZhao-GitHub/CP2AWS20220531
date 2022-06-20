export const APIEndpoints = {

    CMS_URL: 'https://cms.insurancecustomerportal.com',
    CMS_API_URLs: [
        {
            category: 'product lines',
            url: 'https://cms.insurancecustomerportal.com/product-lines'
        },
        {
            category: 'products',
            url: 'https://cms.insurancecustomerportal.com/products'
        },
        {
            category: 'coverages',
            url: 'https://cms.insurancecustomerportal.com/coverages'
        },
        {
            category: 'showcases',
            url :'https://cms.insurancecustomerportal.com/showcases'  //http://35.78.194.40/
        }
    ],
    PAS_URL: 'https://pas.insurancecustomerportal.com',
    AUTH_GATEWAY_URL: 'http://oauth.insurancecustomerportal.com:3000',
    AUTH_URLs: [
        {
            provider: 'google',
            url: 'http://oauth.insurancecustomerportal.com:3000/auth/google'
        },
        {
            provider: 'facebook',
            url: 'http://oauth.insurancecustomerportal.com:3000/auth/facebook'
        },
        {
            provider: 'twitter',
            url: 'http://oauth.insurancecustomerportal.com:3000/auth/twitter'
        },
        {
            provider: 'linkedin',
            url: 'http://oauth.insurancecustomerportal.com:3000/auth/linkedin'
        },
        {
            provider: 'line',
            url: 'http://oauth.insurancecustomerportal.com:3000/auth/line'
        },
        {
            provider: 'email',
            url: 'http://oauth.insurancecustomerportal.com:3000/local/login'
        }
    ],
    AUTH_CALLBACK_URL: 'http://localhost:4200/profile/:id'
}
