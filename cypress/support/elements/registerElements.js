class elementsPage {

    // Title - Login
    titleRegister = () => {return '.u-column2 > h2'}
    
    // Box Login
    boxRegister = () => {return '.register'}

    // Login Field
    titleFieldName = () => {return '.register > :nth-child(1) > label'}
    fieldName = () => {return '#reg_email'}
    
    titleFieldPassword = () => {return '.register > :nth-child(2) > label'}
    fieldPassword = () => {return '#reg_password'}

    // Button Register
    buttonRegister = () => {return 'input[type="submit"][class="woocommerce-Button button"][name="register"]'}

    // Button Register Disable
    buttonDisable = () => {return '.woocomerce-FormRow > .woocommerce-Button'}

    // Para usar nos steps negativos
    alertPasswordWeak = () => {return '.woocommerce-password-strength'} // Very weak - Please enter a stronger password.
    explanationCreatePassword = () => { return'.woocommerce-password-hint'} // The password should be at least seven characters long. To make it stronger, use upper and lower case letters, numbers and symbols like ! " ? $ % ^ & ).

    // Duplicity
    alertAlreadyRegistered = () => {return '.woocommerce-error'}
    textAlreadyRegistered = () => {return '.woocommerce-error > li'}  // Error: An account is already registered with your email address. Please login.

}

export default new elementsPage;