<template>
  <div class="mx-auto h-screen max-w-md bg-slate-50 md:max-w-2xl">
    <div class="flex flex-row place-content-between items-center py-[10px]">
      <div class="place-content-start flex flex-row pl-[6px]">
        <div>
          <img src="../assets/Google_Contacts_icon.svg.png" alt="contacts-icon" class="h-6 w-6" />
        </div>
        <div>My Contacts</div>
      </div>
      <div class="pr-[7px]">
        <button class="border-[1px] border-black hover:bg-gray-400 hover:text-white rounded-[4px]" @click="changepath">
          Add Contacts
        </button>
      </div>
      <router-view></router-view>
    </div>
    <hr />
    <br />

    <div class="px-[10px]">
      <input class="border-[2px] border-black w-full placeholder:text-black items-center text-[15px] pl-[5px]" type="text"
        v-model="text" placeholder="Search Contacts" />
    </div>
    <ul>
      <li v-if="filtereddata.length > 0" v-for="result in filtereddata" :key="result.phone">
        <div>{{ result.firstName }} {{ result.lastName }} {{ result.phone }}</div>
      </li>
      <li v-else>
        <p>not found</p>
      </li>
    </ul>
    <br /><br />

    <div class="grid gap-[40px] grid-cols-3 grid-rows-3 pl-[4px]">
      <div v-for="(item, index) in dataArray" :key="index" class="bg-zinc-200 text-center w-auto h-auto border-2">
        <div>
          <img src="../assets/icons8-contacts-32.png" alt="contacts-icon" class="h-6 w-6" />
        </div>
        {{ item.firstName }} {{ item.lastName }} <br />
        {{ item.countrycode }} {{ item.phone }}
        <br />
        <div class="flex flex-row place-content-end gap-2">
          <button class="bg-white"
            @click="editbutton(item.firstName, item.lastName, item.countrycode, item.phone, index)">
            edit
          </button>
          <button class="bg-red-200" @click="deletebutton(item)">delete</button>
        </div>
      </div>
      <div class="bg-zinc-200 text-center h-auto w-auto  border-2 border-white flex flex-col justify-end"
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
  getlocalvalue()
})
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
console.log(filtereddata)
</script>
