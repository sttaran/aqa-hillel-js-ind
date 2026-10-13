enum ERole {
    Admin ='admin',
    User ='user',
    Manager ='manager'
}



const role: ERole = ERole.Admin

switch(role) {
    case ERole.Admin:
        console.log('Admin role');
        break;
    case ERole.User:
        console.log('User role');
        break;
    case ERole.Manager:
        console.log('Manager role');
        break;
    default:
        console.log('Unknown role');
}