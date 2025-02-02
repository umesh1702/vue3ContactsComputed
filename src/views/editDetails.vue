<template>
  <div class="mx-auto h-screen max-w-md bg-slate-50 md:max-w-2xl p-4">
    <div class="flex flex-col md:flex-row justify-between items-center py-2">
      <div class="flex items-center">
        <img src="../assets/Google_Contacts_icon.svg.png" alt="contacts-icon" class="h-6 w-6">
        <div class="ml-2">My Contacts</div>
      </div>
      <div class="mt-2 md:mt-0"><button class="border-[1px] border-black hover:bg-gray-400 hover:text-white rounded-[4px]"
          @click="changepath">Add Contacts</button></div>
      <router-view></router-view>
    </div>
    <hr class="my-2" />
    <div class="flex place-content-between">
      <div class="pl-[10px]">Add New Contact</div>
      <div class="pr-[10px]"><button class="bg-sky-500 text-white p-1 rounded-md " @click="setlocalvalue">Save</button></div>
    </div>
    <br><br>
    <div class="flex flex-col md:flex-row gap-3">
      <div class="w-full md:w-1/2">
        <label for="firstName">FirstName <span class="text-red-500">*</span></label><br>
        <input class="w-full border-[1px] border-black p-1" v-model="firstName" type="text" placeholder="First name"
          required />
      </div>
      <div class="w-full md:w-1/2">
        <label for="lastName">LastName <span class="text-red-500">*</span></label><br>
        <input class="w-full border-[1px] border-black p-1" v-model="lastName" type="text" placeholder="Last name" required />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-3">
      <div class="w-full md:w-1/2">
        <label for="countrycode">Country Code <span class="text-red-500">*</span></label><br>
        <select class="w-full border-[1px] border-black p-1 " v-model="countrycode" required>
          <option v-for="option in countryOptions" :key="option" :value="option.value">{{ option.label }}</option>
        </select>
      </div>
      <div class="w-full md:w-1/2">
        <label for="phone">Phone <span class="text-red-500">*</span></label><br>
        <input class="w-full border-[1px] border-black p-1" v-model="phone" type="tel" placeholder="Phone" required
          pattern="[0-9]{10}" />
      </div>
    </div>
  </div>
</template>



<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
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
onMounted(() => {
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
    localStorage.setItem("person", JSON.stringify(storedData))
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