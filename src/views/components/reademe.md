### ref

- ref 将基本数据类型转换为响应式 ref(age)->reactive({value:age})
- toRef 将对象中的某个属性转成响应式 const obj = {name:'',age:''},toRef(obj,'name')
- toRefs 将对象中的所有属性转成响应式 const obj = {name:'',age:''} toRefs(obj)
- shallowRef 将数据的第一层转成响应式 shallowRef(123)->shallowReactive({value:123}),所以这个第一层是value，而不是123
- triggerRef 触发ref的UI更新

### reactive

- reactive 将一个对象类型，转换成响应式 reactive({name:123,age:456})
- shallowReactive 数据的第一层是响应式的 shallowReactive({name:123,sub:{name:456}}),sub.name属性不是响应式
- isReactive 判断是否是reactive数据类型

### raw

- toRaw 获取响应式数据的原始数据
- markRaw 标记一个对象，永远不会转换成响应式，返回对象本身

### readonly

- shallowReadonly 第一层readonly
- readonly 递归readonly
