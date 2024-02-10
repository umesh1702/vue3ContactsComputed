<template  >
  <div class="mx-auto h-screen max-w-md bg-slate-50 md:max-w-2xl">
    <div class=" flex flex-row place-content-between">
      <div class="place-content-start flex flex-row">
      <div><img src="../assets/contacts-svgrepo-com.svg" alt="contacts-icon" class="h-6 w-6"> </div><div >contacts</div></div>
      <div><button class="border-[1px] border-black hover:bg-gray-400 hover:text-white" @click="changepath">Add
        Contacts</button></div>
      <router-view></router-view>
    </div><br>
    <hr>
    <input class="border-[1px] border-black " type="text" v-model="text"
      placeholder="Search Here">
    <ul>
      <div v-for="result in filtereddata" :key="result">
        {{ result.firstName }} {{ result.lastName }} {{ result.phone }}
      </div>
    </ul>
    <br><br>
    <div class="grid gap-[40px] grid-cols-3 grid-rows-3 ">
      <div v-for="(item, index) in dataArray" :key="index"
        class="bg-gray-400 text-center w-[250px] h-auto border-2 border-white">{{ item.firstName }} {{ item.lastName }}
        <br> {{ item.countrycode }} {{ item.phone }}
        <br><button class="bg-white" @click="editbutton(item.firstName,item.lastName,item.countrycode,item.phone,index)" >edit</button> <button class="bg-white"
          @click="deletebutton(item)"> delete </button>
      </div>
      <div class="bg-gray-400 text-center w-[250px] h-[100px] border-2 border-white" @click="changepath">+</div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRouter} from 'vue-router'
import { ref } from 'vue';

var dataArray = ref([])
const router = useRouter()
const text = ref("")
onMounted(() => {
  getlocalvalue()
})
const getlocalvalue = () => {
  const storedData = JSON.parse(localStorage.getItem('person'))
  dataArray.value = dataArray.value.concat(storedData)
}

const changepath = () => {
  const redirectpath = "/contactDetails"
  router.push(redirectpath)
}
const editbutton = (firstName,lastName,countrycode,phone,index) => {
  router.push({
    name: "editing",
    params:{firstName,lastName,countrycode,phone,index}
  })
}
const deletebutton = (item) => {
  console.log(item)
  dataArray.value = dataArray.value.filter((data) => data !== item)
  localStorage.setItem("person", JSON.stringify(dataArray.value))
}
const filtereddata = computed(() => {
  return (dataArray.value.filter((data) => {
    if (JSON.parse(JSON.stringify(data)).firstName == text.value || JSON.parse(JSON.stringify(data)).lastName == text.value || JSON.parse(JSON.stringify(data)).phone == text.value) {
      return (JSON.parse(JSON.stringify(data)).firstName == text.value)
    }
  }))
})

</script>  