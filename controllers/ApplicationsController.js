// store new application
exports.store = (req, res) => {
    req.flash('form', req.body.first_name + ', You are a true hero');
    res.redirect('/');
};

exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');

    next();
};