
<template  >
  <div class="w-[820px] h-full align-center bg-slate-50 mx-[600px]">
  <div >
    My contacts 
    <router-link to = "/about">
    <button class="ml-[600px] border-2 border-black hover:bg-gray-400 hover:text-white">Add Contacts</button>
  </router-link>

  </div><br>
  <hr><br><br>
  <div class="grid gap-[40px] grid-cols-3 grid-rows-3 ">
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white" >{{ contacts[0].phone }}</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white">2</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white">3</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white">4</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white">5</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white">6</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white">7</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white">8</div>
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white" @onclick="redirect()">+</div>
  </div>
</div>
</template>

<script>
import hello from "@/views/testTo.vue"
export default{
  name : "App",
  components:{hello},
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
        
    }
  }
}
</script>


