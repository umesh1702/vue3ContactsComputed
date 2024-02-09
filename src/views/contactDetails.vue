<template>
  <div class="w-[820px]  h-screen align-center bg-slate-50 mx-[600px]">
    <div>
      <p> contacts</p>
      <button
        class="ml-[650px] border-[1px] border-black hover:bg-gray-400 hover:text-white"
        @click="redirect"
      >
      <p>  Add Contacts</p>
      </button>
      <router-view></router-view>
    </div>
    <br />
    <hr />
    <div>
    <p>  Add New Contact</p>
      <button class="bg-sky-500 text-white ml-[600px]" @click="setlocalvalue">Save</button>
    </div>
    <br />

    <p> First Name </p><br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="firstName"
      type="text"
      placeholder="first name"
      required
    /><br />
   <p> lastName  </p><br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="lastName"
      type="text"
      placeholder="last name"
      required
    />
    <br />
   <p> countrycode </p> <br />
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
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { countries } from 'countries-list'


const firstName = ref('')
const lastName = ref('')
const countrycode = ref('')
const phone = ref('')
const route = useRoute()
const router = useRouter()
let dataArray = []
let data = {}
const arr = ['firstName', 'lastName', 'countrycode', 'phone']

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
    console.log(storedData)
    if (storedData !== null) {
      dataArray = dataArray.concat(storedData)
      arr.forEach((item) => {
        data[`${item}`] = eval(item).value
      })
      dataArray.push(data)
      console.log(dataArray)
      localStorage.setItem('person', JSON.stringify(dataArray))
      redirect()
    } else {
      arr.forEach((item) => {
        data[`${item}`] = eval(item).value
      })
      console.log(dataArray)
      dataArray.push(data)
      console.log(dataArray)
      localStorage.setItem('person', JSON.stringify(dataArray))
      redirect()
    }
  }
}
const redirect = () => {
  const redirectpath = route.query.redirect || '/'
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
