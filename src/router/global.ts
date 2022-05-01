import {App, defineAsyncComponent} from "vue";
import {RouteRecordRaw} from "vue-router";
import {letterToLowerCase, letterToUpperCase} from "@/utils/tools";

function getModules() {
    return import.meta.glob('../views/**/*.vue')
}
function getComponents() {
    return import.meta.globEager('../views/**/*.vue')
}
// 自动注册组件
export const asyncComponent = function (app: App<Element>): void {
    const modules = getModules();
    const components = getComponents();
    Object.keys(modules).forEach((key: string) => {
        const viewSrc = components[key];
        const file = viewSrc.default;
        if (!file.isComponents) return
        const AsyncComponent = defineAsyncComponent(modules[key])
        app.component(letterToUpperCase(file.name), AsyncComponent)
    });
    // console.log(app._component.components)
};

// 自动注册路由
export const vueRouters = function (): Array<RouteRecordRaw> {
    let routerList: Array<RouteRecordRaw> = [];
    const modules = getModules();
    const components = getComponents();
    Object.keys(modules).forEach(key => {
        const viewSrc = components[key];
        const file = viewSrc.default;
        if (!file.isRouter) return
        // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
        routerList.push({
            path: `/${letterToLowerCase(file.name)}`,
            name: `${letterToUpperCase(file.name)}`,
            component: modules[key]
        });
    })
    return routerList
}