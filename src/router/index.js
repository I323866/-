import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/license',
                    component: resolve => require(['../components/page/License.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/children',
                    component: resolve => require(['../components/page/Children.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/training',
                    component: resolve => require(['../components/page/Training.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/safe',
                    component: resolve => require(['../components/page/Safe.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/urgent',
                    component: resolve => require(['../components/page/Urgent.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/tec',
                    component: resolve => require(['../components/page/Tec.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
