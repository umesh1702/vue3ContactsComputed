<template>
  <div class="mx-auto h-screen max-w-md bg-slate-50 md:max-w-2xl">
    <div class="flex items-center p-2">
      <div class="flex item-center gap-2">
        <div>
          <img src="../assets/Google_Contacts_icon.svg.png" alt="contacts-icon" class="h-6 w-6" />
        </div>
        <div>My Contacts</div>
      </div>
      <div class="grow" />
      <div class="">
        <button class="border-2 border-black hover:bg-gray-400 hover:text-white rounded-md p-1" @click="changepath">
          Add Contacts
        </button>
      </div>
    </div>
    <hr />
    <br />

    <div class="px-[10px]">
      <input class="border-[2px] border-black w-full placeholder:text-black items-center text-[15px] pl-[5px]" type="text"
        v-model="text" placeholder="Search Contacts" @input="searchbar()" />
    </div>
    <ul class="hidden" id="searchbar">
      <li  v-if="filtereddata.length > 0" >
        <div v-for="result in filtereddata" :key="result.phone">{{ result.firstName }}-{{ result.lastName }}-{{ result.phone }}</div>
      </li>
      <li v-else>
        not found
      </li>
    </ul>
    <br /><br />

    <div class="grid gap-[40px] grid-cols-3 grid-rows-3 px-[4px]">
      <div v-for="(item, index) in dataArray" :key="index" class="bg-zinc-200 text-center w-auto h-[124px] border-2 relative">
        <div>
          <img src="../assets/icons8-contacts-32.png" alt="contacts-icon" class="h-6 w-6" />
        </div>
        {{ item.firstName }} {{ item.lastName }} <br />
        {{ item.countrycode }} {{ item.phone }} <br />
        <div class="flex absolute right-0 bottom-0 gap-2">
          <button @click="copyToClipboard(item.phone)">
            <img src="../assets/mdi--content-copy.svg" alt="copy-icon" class="h-4 w-4" />
          </button>
          <button class="bg-white p-1 rounded-md"
            @click="editbutton(item.firstName, item.lastName, item.countrycode, item.phone, index)">
            edit
          </button>
          <button class="bg-red-200 p-1 rounded-md" @click="deletebutton(item)">delete</button>
        </div>
      </div>
      <div class="bg-zinc-200 text-center  flex flex-col justify-end"
        @click="changepath">
        <div class="m-auto">
          +
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

var dataArray = ref([])
const router = useRouter()
const text = ref('')

onMounted(() => {
  console.log(document.getElementById("searchbar").className)
  getlocalvalue()
})
function searchbar(){
  document.getElementById("searchbar").className="none"
  setTimeout(()=>{
    if(document.getElementById("searchbar").value === ""){
    document.getElementById("searchbar").className="hidden"}
  },2000)
}


const getlocalvalue = () => {
  const storedData = JSON.parse(localStorage.getItem('person'))
  dataArray.value = dataArray.value.concat(storedData)
}

const changepath = () => {
  const redirectpath = '/contactDetails'
  router.push(redirectpath)
}
const editbutton = (firstName, lastName, countrycode, phone, index) => {
  router.push({
    name: 'editing',
    params: { firstName, lastName, countrycode, phone, index }
  })
}
const deletebutton = (item) => {
  console.log(item)
  dataArray.value = dataArray.value.filter((data) => data !== item)
  localStorage.setItem('person', JSON.stringify(dataArray.value))
}
const filtereddata = computed(() => {
  const data = dataArray.value.filter((data) => {
    return JSON.parse(JSON.stringify(data)).firstName == text.value
  })
  return data
})
const copyToClipboard = (phone) =>{
  alert("Phone number has been copied to clipboard")
  navigator.clipboard.writeText(phone)
}
</script>
