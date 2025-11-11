const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// ✅ دي الإضافة المهمة عشان يعرف يتعامل مع الخطوط
config.resolver.assetExts.push('ttf');

module.exports = config;