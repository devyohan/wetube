import routes from "../routes";

export const getJoin = (req, res) => {
    res.render('join', { pageTitle: 'Join' });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, passwordverify }
    } = req;
    if(password !== passwordverify) {
        res.status(400);
        res.render('join', { pageTitle: 'Join' });
    } else {
        // To Do: Register user
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) =>
    res.render('login', { pageTitle: 'Login' });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};
export const logout = (req, res) =>
    res.send('logout');
export const userDetail = (req, res) =>
    res.render('userDetail', { pageTitle: 'UserDetail' });
export const editProfile = (req, res) =>
    res.render('editProfile', { pageTitle: 'EditProfile' });
export const changePassword = (req, res) =>
    res.render('changePassword', { pageTitle: 'Change Password' });