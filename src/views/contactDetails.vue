<template>
  <div class="mx-auto h-screen max-w-md bg-slate-50 md:max-w-2xl">
    <div class=" flex flex-row place-content-between items-center py-[10px]">
      <div class="place-content-start flex flex-row pl-[6px]">
        <div><img src="../assets/Google_Contacts_icon.svg.png" alt="contacts-icon" class="h-6 w-6"> </div>
        <div> My Contacts</div>
      </div>
      <div class="pr-[7px]"><button class="border-[1px] border-black hover:bg-gray-400 hover:text-white rounded-[4px]"
          @click="changepath">Add
          Contacts</button></div>
      <router-view></router-view>
    </div>
    <hr />
  
    <div class=" flex flex-row place-content-between items-center py-[10px]">
    <div class="place-content-start flex flex-row pl-[6px]">Add New Contact</div>
     <div class="pr-[7px]"><button class="bg-sky-500 text-white" @click="setlocalvalue">Save</button></div> 
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
import { useRouter} from 'vue-router'
import { countries } from 'countries-list'


const firstName = ref('')
const lastName = ref('')
const countrycode = ref('')
const phone = ref('')
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
