<template  >
  <div class="w-[820px] h-full align-center bg-slate-50 mx-[600px]">
  <div >
    contacts
    <button class=" ml-[650px] border-[1px] border-black hover:bg-gray-400 hover:text-white" @click="getlocalvalue">Add Contacts</button>
  <router-view></router-view>
  </div><br>
  <hr><br><br>
  <div class="grid gap-[40px] grid-cols-3 grid-rows-3 ">
    <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white" >{{ }}</div>
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

<RouterView />
</template>

<script setup>

const arr =["firstName","lastName","countrycode","phone"]
let obj={}
let arr1 =[]
const getlocalvalue=()=>{
    arr.forEach(item =>{    
    let values = localStorage.getItem(`${item}`);
    obj[`${item}`]=values
        })
arr1.push(obj)
console.log(arr1)
      }
</script>