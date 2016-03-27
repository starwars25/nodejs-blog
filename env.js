var env;

if(process.env.NODE_ENV === 'production') {
    env = 'production';
} else {
    env = 'development';
}

module.exports = env;