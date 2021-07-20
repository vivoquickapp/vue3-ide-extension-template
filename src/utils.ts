const language = require('../media/locale.json');

export function localize(key: string) {
    let lan = JSON.parse(process.env.VSCODE_NLS_CONFIG || `{locale: 'zh-cn'}`);
    if (lan.locale.toLowerCase() === 'zh-cn') {
        return language[key].chinese;
    } else {
        return language[key].english;
    }
}

export function getLanguage():string {
    let lan = JSON.parse(process.env.VSCODE_NLS_CONFIG || `{locale: 'zh-CN'}`);
    return lan.locale;
}