
<script>
export default {
    functional:true,
    render(h,context){
        console.log(context)
        return h('div','Comp')
    },
    props:['prop1']
}
</script>

