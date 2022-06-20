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
    AUTH_GATEWAY_URL: 'https://oauth.insurancecustomerportal.com',
    AUTH_URLs: [
        {
            provider: 'google',
            url: 'https://oauth.insurancecustomerportal.com/auth/google'
        },
        {
            provider: 'facebook',
            url: 'https://oauth.insurancecustomerportal.com/auth/facebook'
        },
        {
            provider: 'twitter',
            url: 'https://oauth.insurancecustomerportal.com/auth/twitter'
        },
        {
            provider: 'linkedin',
            url: 'https://oauth.insurancecustomerportal.com/auth/linkedin'
        },
        {
            provider: 'line',
            url: 'https://oauth.insurancecustomerportal.com/auth/line'
        },
        {
            provider: 'email',
            url: 'https://oauth.insurancecustomerportal.com/local/login'
        }
    ],
    AUTH_CALLBACK_URL: 'http://localhost:4200/profile/:id'
}
