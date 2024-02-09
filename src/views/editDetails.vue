<template>
    <div class="w-[820px] h-screen align-center bg-slate-50 mx-[600px]">
  <div >
    <p>contacts</p> 
    <button class=" ml-[650px] border-[1px] border-black hover:bg-gray-400 hover:text-white" >Add Contacts</button>

  </div><br>
  <hr>
  <div>
     <p> Add New Contact</p> 
      <button class="bg-sky-500 text-white ml-[600px]" @click="setlocalvalue">Save</button>
    </div>
    <br />

    <br />
    <div>
   <p>First Name</p> <br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="firstName"
      type="text"
      placeholder="first name"
      required
    /><br />
    <p> lastName </p> <br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="lastName"
      type="text"
      placeholder="last name"
      required
    />
    <br />
   <p> countrycode </p><br />
    <select
      class="w-[350px] border-[1px] border-black"
      v-model="countrycode"
      type="text"
      placeholder="country code name"
      required
    >
      <option v-for="option in countryOptions" :key="option" :value="option.value">
        {{ option.label }}
      </option></select
    ><br />
    <p> phone </p> <br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="phone"
      type="tel"
      placeholder="phone"
      required
      pattern="[0-9]{10}"
    />

  </div>
</div>
</template>


<script setup>
import { onMounted, ref,computed } from 'vue';
import {  useRoute,useRouter } from 'vue-router';
import { countries } from 'countries-list'

const firstName = ref("")
const lastName = ref("")
const countrycode = ref("")
const phone = ref("")
const route = useRoute()
const router = useRouter()
var index 


//const arr = ['firstName', 'lastName', 'countrycode', 'phone']
console.log(route.params)
onMounted(()=>{
  firstName.value = route.params.firstName
  lastName.value = route.params.lastName
  countrycode.value = route.params.countrycode
  phone.value = route.params.phone
  index = route.params.index
  console.log(route.params)
})


const setlocalvalue = () => {
  if (
    firstName.value == '' ||
    lastName.value == '' ||
    phone.value == null ||
    countrycode.value == null
  ) {
    alert('fill all the fields')
  } else {
    const storedData = JSON.parse(localStorage.getItem('person'))
    storedData[parseInt(index)].firstName = firstName.value
    storedData[parseInt(index)].lastName = lastName.value
    storedData[parseInt(index)].countrycode = countrycode.value
    storedData[parseInt(index)].phone = phone.value
    console.log(storedData)
    localStorage.setItem("person",JSON.stringify(storedData))
    console.log(index)

    console.log("hello")
    redirect()
  }
}
const redirect = () => {
  const redirectpath = '/'
  console.log('Redirect Path:', redirectpath)
  router.push(redirectpath)
}

const countryOptions = computed(() => {
  const result = []
  Object.keys(countries).forEach((item) => {
    result.push({
      value: `+${countries[item].phone}`,
      label: `${countries[item].name}`
    })
  })
  return result
})
</script>