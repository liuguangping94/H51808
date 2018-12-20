<template>
    <div>
        user
        <p>
            {{ $route.params.userid }}
            {{ $route.params.photoid }}
        </p>
    </div>
</template>
<script>
export default {
    props:['userid','name'],

}
</script>

