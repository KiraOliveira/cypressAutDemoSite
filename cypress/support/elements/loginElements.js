class loginPage {

    // Title - Login
    titleLogin = () => {return '.u-column1 > h2'}
    
    // Box Login
    boxLogin = () => {return '.login'}

    // Login Field
    titleFieldName = () => {return '.login > :nth-child(1) > label'}
    fieldName = () => {return '#username'}
    
    titleFieldPassword = () => {return '.login > :nth-child(2) > label'}
    fieldPassword = () => {return '#password'}

    // Botão Login
    buttonLogin = () => {return 'input[type="submit"][class="woocommerce-Button button"][name="login"]'}

    // Remember me
    markRememberMe =() => {return '#rememberme'}
    labelRememberMe = () => {return '.inline'}

    // Lost your password?
    linkLostPassword = () => {return '.woocommerce-LostPassword > a'}

    // Valida se o e-mail foi registrado
    alertMsgError = () => {return '.woocommerce-error'}
    alertMsgErrorText = () => {return '.woocommerce-error > li'}    
}

export default new loginPage;