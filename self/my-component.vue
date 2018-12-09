<template>
	<div class="hello">hello {{who}}</div>
</template>

<script type="text/javascript">
	module.exports = {
		name:'my',
		data(){
			return{
				who:'world'
			}
		}
	}
</script>
<style type="text/css">
	.hello{
		background-color: #ffe;
	}
</style>