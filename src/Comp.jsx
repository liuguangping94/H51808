
// export default {
//     functional:true,
//     render(h,context){
//         console.log(context)
//         return h('div','Comp')
//     },
//     props:['prop1']
// }



// const Child = {
//     functional:true,
//     render(h,context){
//         console.log(context)
//         return h('div','Comp2')
//     },
//     props:['prop1']
// }
const Child = ({props}) => {
    return (
        <div>test -{props.prop1}</div>
    )
}
export default {
    // components:{
    //     Child
    // },
    render(){
        return(
            <Child prop1="test2"></Child>   
        )
    }
}