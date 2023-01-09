"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express_1.default.static('./public'));
app.use(express_1.default.json());
app.get('/home', (req, res) => {
    let name = 'Đại';
    res.render('home', { user: name });
});
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map