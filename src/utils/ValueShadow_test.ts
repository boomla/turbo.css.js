import { assert } from "chai";
import ValueShadow from "./ValueShadow";
import ConfigStatic from "./ConfigStatic";
import { ShadowData } from "./Config";

const config = new ConfigStatic({
    shadows: {
        1: new ShadowData("1px 0 0 0 rgba(0,0,0,{opacity})", 0.2),
        2: new ShadowData("2px 0 0 0 rgba(0,0,0,{opacity})", 0.15),
        4: new ShadowData("4px 0 0 0 rgba(0,0,0,{opacity})", 0.14),
        8: new ShadowData("8px 0 0 0 rgba(0,0,0,{opacity})", 0.17),
        16: new ShadowData("16px 0 0 0 rgba(0,0,0,{opacity})", 0.15),
        32: new ShadowData("32px 0 0 0 rgba(0,0,0,{opacity})", 0.15),
    },
});

let okToCSS = function (value: ValueShadow, exp: string) {
    let act = value.toCSS(config);
    assert.equal(act, exp);
};
let okToClassName = function (value: ValueShadow, exp: string) {
    let act = value.toClassName();
    assert.equal(act, exp);
};
describe('ValueShadow', function () {
    it('toCSS, different distances', () => {
        okToCSS(new ValueShadow(1), "1px 0 0 0 rgba(0,0,0,0.2)");
        okToCSS(new ValueShadow(2), "2px 0 0 0 rgba(0,0,0,0.15)");
        okToCSS(new ValueShadow(4), "4px 0 0 0 rgba(0,0,0,0.14)");
        okToCSS(new ValueShadow(8), "8px 0 0 0 rgba(0,0,0,0.17)");
        okToCSS(new ValueShadow(16), "16px 0 0 0 rgba(0,0,0,0.15)");
        okToCSS(new ValueShadow(32), "32px 0 0 0 rgba(0,0,0,0.15)");
    });
    it('toCSS, different darknesses', () => {
        okToCSS(new ValueShadow(1, 0), "1px 0 0 0 rgba(0,0,0,0)");
        okToCSS(new ValueShadow(1, 20), "1px 0 0 0 rgba(0,0,0,0.2)");
        okToCSS(new ValueShadow(1, 50), "1px 0 0 0 rgba(0,0,0,0.5)");
        okToCSS(new ValueShadow(1, 100), "1px 0 0 0 rgba(0,0,0,1)");
    });
    it('toClassName', () => {
        okToClassName(new ValueShadow(1), "1");
        okToClassName(new ValueShadow(2), "2");
        okToClassName(new ValueShadow(1, 0), "1-0");
        okToClassName(new ValueShadow(1, 20), "1-20");
        okToClassName(new ValueShadow(1, 100), "1-100");
    });
});
