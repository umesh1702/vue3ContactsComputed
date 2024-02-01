
<template  >
  <div class="bg-white text-black">
    Contacts
    <button @click="redirect()">Add Contacts</button>
</div>
</template>

<script>
export default{
  name : "app",
  data(){
    return{
      contacts:[
        {firstName:"jin",lastName:"mori",phone:6303437951},
        {firstName:"jin",lastName:"mori",phone:6303437952},
        {firstName:"jin",lastName:"mori",phone:6303437953}]
    }
  },
  methods:{
    redirect(){
      console.log('hello')
    }
  }
}
</script>


