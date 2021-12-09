module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:'http://tumblr4u.eastus.cloudapp.azure.com:5000'
  }
}
