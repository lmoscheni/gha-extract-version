export const id = 805;
export const ids = [805];
export const modules = {

/***/ 8805:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"web-streams-polyfill","version":"3.2.0","description":"Web Streams, based on the WHATWG spec reference implementation","main":"dist/polyfill","browser":"dist/polyfill.min.js","module":"dist/polyfill.mjs","types":"dist/types/polyfill.d.ts","typesVersions":{">=3.6":{"dist/types/*":["dist/types/ts3.6/*"]}},"scripts":{"test":"npm run test:types && npm run test:unit && npm run test:wpt","test:wpt":"node --expose_gc ./test/run-web-platform-tests.js","pretest:wpt":"git submodule update --init --recursive","test:types":"tsc -p ./test/types/tsconfig.json","test:unit":"jasmine --config=test/unit/jasmine.json","lint":"eslint \\"src/**/*.ts\\"","build":"npm run build:bundle && npm run build:types","build:bundle":"rollup -c","build:types":"tsc --project . --emitDeclarationOnly --declarationDir ./lib && api-extractor run && node ./build/downlevel-dts.js","accept:types":"tsc --project . --emitDeclarationOnly --declarationDir ./lib && api-extractor run --local && node ./build/downlevel-dts.js","prepare":"npm run build"},"files":["dist","es6","es2018","ponyfill"],"engines":{"node":">= 8"},"repository":{"type":"git","url":"git+https://github.com/MattiasBuelens/web-streams-polyfill.git"},"keywords":["streams","whatwg","polyfill"],"author":"Mattias Buelens <mattias@buelens.com>","contributors":["Diwank Singh <diwank.singh@gmail.com>"],"license":"MIT","bugs":{"url":"https://github.com/MattiasBuelens/web-streams-polyfill/issues"},"homepage":"https://github.com/MattiasBuelens/web-streams-polyfill#readme","devDependencies":{"@microsoft/api-extractor":"^7.13.4","@rollup/plugin-inject":"^4.0.2","@rollup/plugin-replace":"^2.4.2","@rollup/plugin-strip":"^2.0.0","@rollup/plugin-typescript":"^8.2.1","@types/node":"^14.14.37","@typescript-eslint/eslint-plugin":"^4.21.0","@typescript-eslint/parser":"^4.21.0","@ungap/promise-all-settled":"^1.1.2","eslint":"^7.23.0","jasmine":"^3.7.0","micromatch":"^4.0.2","rollup":"^2.44.0","rollup-plugin-terser":"^7.0.2","ts-morph":"^10.0.2","tslib":"^2.2.0","typescript":"^4.2.4","wpt-runner":"^3.2.1"}}');

/***/ })

};
