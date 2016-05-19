'use strict'

export default function(router){
    router.map({
        '/topic/:id':{               //专题
            name:'topic',
            component: function(resolve){
                require(['./views/topic.vue'],resolve);
            }
        },
        '/add':{               //首页
            name:'add',
            component: function(resolve){
                require(['./views/new.vue'],resolve);
            },
            auth: true
        }
    })
}
