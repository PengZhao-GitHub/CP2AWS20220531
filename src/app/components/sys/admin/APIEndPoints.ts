export const APIEndpoints = {

    CMS_URL: 'http://cms.insurancecustomerportal.com:1337',
    CMS_API_URLs: [
        {
            category: 'product lines',
            url: 'http://cms.insurancecustomerportal.com:1337/product-lines'
        },
        {
            category: 'products',
            url: 'http://cms.insurancecustomerportal.com:1337/products'
        },
        {
            category: 'coverages',
            url: 'http://cms.insurancecustomerportal.com:1337/coverages'
        },
        {
            category: 'showcases',
            url :'http://cms.insurancecustomerportal.com:1337/showcases'  //http://35.78.194.40/
        }
    ],
    PAS_URL: 'http://pas.insurancecustomerportal.com:5000',
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
