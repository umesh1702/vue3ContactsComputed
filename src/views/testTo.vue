<template>
    <div class="w-[820px] h-full align-center bg-slate-50 mx-[600px]">
        <div >
    contacts
    <button class=" ml-[650px] border-[1px] border-black hover:bg-gray-400 hover:text-white" @click="redirect">Add Contacts</button>
  <router-view></router-view>
  </div><br>
  <hr>
        <div>
            Add New Contact 
            <button class="bg-sky-500 text-white ml-[600px] " @click="setlocalvalue">Save</button>
        </div><br>
        
        <p> your typed name is {{ firstName }}</p>
        <input v-model="firstName" type="text" placeholder="first name">
        lastName
        <input v-model="lastName" type="text" placeholder="last name">
        countrycode
        <input v-model="countrycode" type="text" placeholder="country code name">
        phone
        <input v-model="phone" type="text" placeholder="phone">

    </div>
</template>
<script setup >
import { ref } from "vue"

const firstName = ref("")
const lastName = ref("")
const countrycode = ref("")
const phone= ref("")

const arr =["firstName","lastName","countrycode","phone"]


const setlocalvalue=()=>{
    arr.forEach(item =>{    
    localStorage.setItem(`${item}`,eval(item).value);
        })
}



</script>