const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',  // Входной файл
    output: {
        filename: 'bundle.js',  // Файл, в который будет собран весь код
        path: path.resolve(__dirname, 'dist'),  // Папка для сборки
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // Обработка CSS файлов
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Обработка изображений
                type: 'asset/inline',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
           },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),  // Папка, откуда будет запускаться сервер
        compress: true,
        port: 9000,  // Порт, на котором будет запущен сервер
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',  // Исходный HTML-шаблон
            filename: 'index.html',  // Имя выходного HTML-файла
        }),
    ],
    mode: 'development',  // Режим сборки (development/production)
};
